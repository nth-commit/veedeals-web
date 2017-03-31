import { VeedealsWebPage } from './app.po';

describe('veedeals-web App', () => {
  let page: VeedealsWebPage;

  beforeEach(() => {
    page = new VeedealsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
