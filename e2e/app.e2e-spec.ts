import { GurpsyMcGurpsFacePage } from './app.po';

describe('gurpsy-mc-gurps-face App', function() {
  let page: GurpsyMcGurpsFacePage;

  beforeEach(() => {
    page = new GurpsyMcGurpsFacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
