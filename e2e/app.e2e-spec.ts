import { AppPage } from './app.po';

describe('claims-processing-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Claims Processing Demo');
  });
});
