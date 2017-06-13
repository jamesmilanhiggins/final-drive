import { FinalDrivePage } from './app.po';

describe('final-drive App', () => {
  let page: FinalDrivePage;

  beforeEach(() => {
    page = new FinalDrivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
