describe('Cart', function() {
  var cart;

  beforeEach(function() {
    cart = new Cart();
  });

  describe('shopping cart', function() {
    it('starts off empty', function() {
      expect(cart.contents).toEqual({});
    });
  });
});
