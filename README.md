##Shopping Cart

This is the repo for the shopping cart challenge. The idea is to create a web
page that allows users to add/ remove items of clothing that they would like to
buy to a shopping cart and the total would be displayed. In addition, a voucher
system is in place for some conditional discounts.

This project was done in a short amount of time and as a result, is missing a
lot of polish and some front end tests. If I had more time, I would go back and
add some CSS and complete those missing tests. The back end logic is well tested
however.

The user stories in order of importance were as follows:

1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart
   with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping cart.
7. As a User I am unable to Out of Stock products to the shopping cart.

I started off with mocking the data to make it easy to read and access in the
future, then I went on to add the add item and remove item features, whilst also
considering the fail cases in the tests. The calculation of the total was a bit
trickier since there were no neat map functions that I know of, unlike Ruby. The
rest was just following the user stories. My code for the jQuery front end
definitely wasn't the best solution but I wanted to avoid hard coding all those
items. I also couldn't find a neat way to display the contents of the cart, which
ought to be easy.

##Technologies used

Javascript, jQuery, no other external libraries were used.

##How to install

Clone the repo and open Specrunner.html to run the tests. Similarly, open
index.html to see the web page.


