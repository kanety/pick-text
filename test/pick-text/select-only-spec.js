import PickText from 'index';

describe('select only', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>sample text 1</div>
      <textarea>sample text 2</textarea>
    `;
  });

  it('selects html', () => {
    let div = document.querySelector('div');
    PickText.run(div, { copy: false });
    expect(window.getSelection().toString()).toEqual('sample text 1');
  });

  it('selects textarea', () => {
    let textarea = document.querySelector('textarea');
    PickText.run(textarea, { copy: false });
    expect(textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)).toEqual('sample text 2');
  });
});
