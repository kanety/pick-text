import PickText from 'index';

describe('index', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>sample text 1</div>
      <textarea>sample text 2</textarea>
    `;
  });

  it('copies from html', () => {
    PickText.run('div');
    expect(navigator.clipboard.readText()).toEqual('sample text 1');
  });

  it('copies from textarea', () => {
    PickText.run('textarea');
    expect(navigator.clipboard.readText()).toEqual('sample text 2');
  });
});
