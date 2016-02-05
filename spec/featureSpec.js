describe('shoppingCart', function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    cart = new Cart();
  });

  it('displays default total', function(){
    expect('#total').toContainText(0);
  });
});
