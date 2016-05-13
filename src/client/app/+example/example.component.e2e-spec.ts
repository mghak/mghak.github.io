describe('Example', () => {

  beforeEach( () => {
    browser.get('/');
  });

  it('should have an input', () => {
    expect(element(by.css('sd-app sd-example form input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', () => {
    expect(element(by.css('sd-app sd-example ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

  it('should add a name to the list using the form', () => {
    element(by.css('sd-app sd-example form input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-app sd-example form button')).click();
    expect(element(by.css('sd-app sd-example ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  });
});
