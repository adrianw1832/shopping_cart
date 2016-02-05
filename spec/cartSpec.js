describe('Cart', function() {
  var cart;

  beforeEach(function() {
    cart = new Cart();
  });

  describe('shopping cart', function() {
    it('starts off empty', function() {
      expect(cart.contents).toEqual({});
    });

    it('user can add an item to it', function() {
      cart.addItem('Suede Shoes, Blue', 1);
      expect(cart.contents).toEqual({'Suede Shoes, Blue': 1});
    });

    it('user can add two of the same item to it', function() {
      cart.addItem('Suede Shoes, Blue', 1);
      cart.addItem('Suede Shoes, Blue', 1);
      expect(cart.contents).toEqual({'Suede Shoes, Blue': 2});
    });

    it('user can add two different items to it', function() {
      cart.addItem('Suede Shoes, Blue', 1);
      cart.addItem('Flip Flops, Red', 2);
      expect(cart.contents).toEqual({'Suede Shoes, Blue': 1, 'Flip Flops, Red': 2});
    });
  });
});
