export default class PickText {
  constructor(element) {
    if (typeof element == 'string') {
      this.element = document.querySelector(element);
    } else {
      this.element = element;
    }
  }

  get isInput() {
    let tag = this.element.tagName.toLowerCase();
    return tag == 'input' || tag == 'textarea';
  }

  run(options = {}) {
    this.select();
    if (options.copy) this.copy();
  }

  select() {
    if (this.isInput) {
      this.selectInput();
    } else {
      this.selectRange();
    }
  }

  selectInput() {
    let readonly = this.element.readOnly;
    this.element.readOnly = false;
    this.element.select();
    this.element.readOnly = readonly;
  }

  selectRange() {
    let range = document.createRange();
    range.selectNodeContents(this.element);

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  copy() {
    if (this.isInput) {
      this.copyInput();
    } else {
      this.copyRange();
    }
  }

  copyInput() {
    let text = this.element.value.substring(this.element.selectionStart, this.element.selectionEnd);
    this.copyToClipboard(text);
  }

  copyRange() {
    let text = window.getSelection().toString();
    this.copyToClipboard(text);
  }

  copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      document.execCommand("copy");
    }
  }

  static run(element, options = {}) {
    if (options.copy == undefined) options.copy = true;
    new PickText(element).run(options);
  }
}
