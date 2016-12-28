import { ChordsBookPage } from './app.po';

describe('chords-book App', function() {
  let page: ChordsBookPage;

  beforeEach(() => {
    page = new ChordsBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
