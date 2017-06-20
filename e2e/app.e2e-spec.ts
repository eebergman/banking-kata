import { BankingKataPage } from './app.po';

describe('banking-kata App', () => {
  let page: BankingKataPage;

  beforeEach(() => {
    page = new BankingKataPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
