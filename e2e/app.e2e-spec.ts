import { TeamRosterPage } from './app.po';

describe('team-roster App', function() {
  let page: TeamRosterPage;

  beforeEach(() => {
    page = new TeamRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
