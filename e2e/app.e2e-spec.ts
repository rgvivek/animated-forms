import { AnimatedFormsPage } from './app.po';

describe('animated-forms App', () => {
  let page: AnimatedFormsPage;

  beforeEach(() => {
    page = new AnimatedFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
