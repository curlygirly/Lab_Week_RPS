describe('Rock, Paper, Scissors', function(){

  beforeEach(function(){
      browser.get('http://localhost:8080');
    });

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('ROCK, PAPER SCISSORS BATTLE');
  });

  it('lets player choose rock', function() {
    element(by.id('rock')).click();
    expect(element(by.id('whatsGoingOn')).getText()).toEqual('rock')
  });

  it('lets player choose scissors', function(){
    element(by.id('scissors')).click();
    expect(element(by.id('whatsGoingOn')).getText()).toEqual('scissors')
  });

  it('lets player choose paper', function(){
    element(by.id('paper')).click();
    expect(element(by.id('whatsGoingOn')).getText()).toEqual('paper')
  });

  it('Player can choose to play again', function() {
    element(by.id('rock')).click();
    element(by.id('play')).click();
    element(by.id('reset')).click();
    expect(element(by.id('whatsGoingOn')).getText()).toEqual('What ya choosing?')
  })

});
