'use strict';

const { toMatchSnapshot } = require('jest-snapshot');

// Increate default timeout to 10s
jest.setTimeout(10e3);

// Avoid loading web-specific deps in non-jsdom env
if (typeof window === 'object') {
  // Load polyfills
  require('raf/polyfill');
  require('matchmedia-polyfill');
  require('matchmedia-polyfill/matchMedia.addListener');
  // Load enzyme
  require('jest-enzyme');
  const { configure } = require('enzyme');
  const Adapter = require('enzyme-adapter-react-16');
  configure({ adapter: new Adapter() });
}

// Lazy load optional matchers
expect.extend({
  toMatchReactSnapshot(received, ...args) {
    const renderer = require('react-test-renderer');
    const tree = renderer.create(received).toJSON();
    return toMatchSnapshot.call(this, tree, ...args);
  },
  toMatchStaticReactSnapshot(received, ...args) {
    const { renderToStaticMarkup } = require('react-dom/server');
    const prettier = require('prettier');
    const markup = renderToStaticMarkup(received);
    const formatted = prettier.format(markup, { parser: 'html' });
    return toMatchSnapshot.call(this, formatted, ...args);
  },
});

/* eslint-env jest */
