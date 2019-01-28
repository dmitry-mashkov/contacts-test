/**
 * @overview  Mocking globals to use with jsdom
 */


const mock = {

  XMLSerializer: class {
    serializeToString() {
      return 'serialize-to-string';
    }
  },
  DOMParser: class {
    parseFromString(content: string) {
      const span = document.createElement('span');
      span.textContent = content;

      return span;
    }
  }
};

Object.defineProperty(window, 'XMLSerializer', {value: mock.XMLSerializer});
Object.defineProperty(window, 'DOMParser', {value: mock.DOMParser});
