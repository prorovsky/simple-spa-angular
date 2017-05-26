import { HotelsListPage } from './app.po';

describe('hotels-list App', () => {
  let page: HotelsListPage;

  beforeEach(() => {
    page = new HotelsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
