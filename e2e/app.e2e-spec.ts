import { Ng2NaturePage } from './app.po';

describe('ng2-nature App', function() {
  let page: Ng2NaturePage;

  beforeEach(() => {
    page = new Ng2NaturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
