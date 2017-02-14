import { AngularLifecycleHooksPage } from './app.po';

describe('angular-lifecycle-hooks App', function() {
  let page: AngularLifecycleHooksPage;

  beforeEach(() => {
    page = new AngularLifecycleHooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
