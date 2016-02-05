describe('ItemList', function() {
  var itemList;

  beforeEach(function() {
    itemList = new ItemList();
    itemList.loadData();
  });

  describe('item list', function() {
    it('stores the product category correctly', function() {
      expect(itemList.items['Almond Toe Court Shoes, Patent Black'].category).toEqual("Women's Footwear");
    });

    it('stores the product price correctly', function() {
      expect(itemList.items['Almond Toe Court Shoes, Patent Black'].price).toEqual('£99.00');
    });

    it('stores the product stock correctly', function() {
      expect(itemList.items['Almond Toe Court Shoes, Patent Black'].stock).toEqual('5');
    });
  });
});
