/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('renders the app', () => {
  // mocks the fetch API used on the stats page and the about page.
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));
  // mocks the scrollTo API used when navigating to a new page.
  window.scrollTo = jest.fn();

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      await ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Marius / About');
  });

  it('can navigate to /about', async () => {
    expect.assertions(7);
    const aboutLink = Array.from(document.querySelectorAll('#header nav.links ul li a')).find((el) => el.textContent.includes('About'));
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      await aboutLink.click();
    });
    expect(document.title).toContain('Marius / About');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenNthCalledWith(1, 0, 0);
    expect(global.fetch).toHaveBeenCalled();
    expect(jsonMock).toHaveBeenCalledTimes(0);
    expect(textMock).toHaveBeenCalledTimes(2); // Initial and click
  });

  it('can navigate to /resume', async () => {
    expect.assertions(3);
    const resumeLink = Array.from(document.querySelectorAll('#header nav.links ul li a')).find((el) => el.textContent.includes('Resume'));
    expect(resumeLink).toBeInTheDocument();
    await act(async () => {
      await resumeLink.click();
    });
    expect(window.location.pathname).toBe('/resume');
    expect(document.title).toContain('Marius / Resume');
  });

  it('can navigate to /blog', async () => {
    expect.assertions(3);
    const blogLink = Array.from(document.querySelectorAll('#header nav.links ul li a')).find((el) => el.textContent.includes('Blog'));
    expect(blogLink).toBeInTheDocument();
    await act(async () => {
      await blogLink.click();
    });
    expect(window.location.pathname).toBe('/blog');
    expect(document.title).toContain('404'); // Redirects to 404 since it's "coming soon" and route is removed
  });
});
