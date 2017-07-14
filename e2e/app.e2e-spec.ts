import { FinalExercisePage } from './app.po';

describe('final-exercise App', () => {
  let page: FinalExercisePage;

  beforeEach(() => {
    page = new FinalExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
