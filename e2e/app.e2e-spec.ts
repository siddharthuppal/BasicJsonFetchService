import { BasicJsonFetcchServicePage } from './app.po';

describe('basic-json-fetcch-service App', () => {
  let page: BasicJsonFetcchServicePage;

  beforeEach(() => {
    page = new BasicJsonFetcchServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
