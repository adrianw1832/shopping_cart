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

    it('user can remove an item from it', function() {
      cart.addItem('Suede Shoes, Blue', 2);
      cart.removeItem('Suede Shoes, Blue', 1);
      expect(cart.contents).toEqual({'Suede Shoes, Blue': 1});
    });

    it('does not allow user to remove from an empty cart', function() {
      expect(function(){ cart.removeItem('Suede Shoes, Blue', 1); }).toThrow(new Error('Not possible'));
    });

    it('does not allow user to remove more than possible', function() {
      cart.addItem('Suede Shoes, Blue', 1);
      expect(function(){ cart.removeItem('Suede Shoes, Blue', 2); }).toThrow(new Error('Not possible'));
    });

    it('starts with a total of 0', function() {
      expect(cart.total).toEqual(0);
    });

    it('can total up the price of the items having added some', function() {
      cart.addItem('Suede Shoes, Blue', 1);
      cart.addItem('Flip Flops, Red', 2);
      expect(cart.total).toEqual(80);
    });

    it('can total up the price of the items having removed some', function() {
      cart.addItem('Suede Shoes, Blue', 1);
      cart.addItem('Flip Flops, Red', 2);
      cart.removeItem('Flip Flops, Red', 1);
      expect(cart.total).toEqual(61);
    });

    it('the total can be resetted', function() {
      cart.addItem('Suede Shoes, Blue', 1);
      cart.resetTotal();
      expect(cart.contents).toEqual({});
      expect(cart.total).toEqual(0);
    });
  });

  describe('voucher system', function() {
    it('can apply the £5 off your order discount', function() {
      cart.addItem('Suede Shoes, Blue', 1);
      cart.applyVoucher('voucher1');
      expect(cart.total).toEqual(37);
    });
  });
});
