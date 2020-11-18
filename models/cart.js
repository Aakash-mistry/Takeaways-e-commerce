module.exports = function cart(oldCart){
     this.items = oldCart.items || {};
     this.totalQty = oldCart.totalQty || 0;
     this.totalPrice = oldCart.totalPrice || 0;

     this.add = function(item,id,title){
         var storedItem = this.items[id];
         if(!storedItem){
             storedItem = this.items[id] = {item: item, qty: 0, price: 0};
             this.totalPrice= 0
         }
         storedItem.qty++;
         storedItem.price = storedItem.item.realPrice * storedItem.qty;
         this.totalQty++;
         this.totalPrice = (oldCart.totalPrice || 0) + storedItem.price;

     };

     this.reduceByOne = function(id){

         this.items[id].qty--;
         this.totalQty--;
         this.totalPrice -= this.items[id].item.realPrice;

         if (this.items[id].qty <= 0) {
             delete this.items[id];
         }
     };

     this.addByOne = function (id) {
         this.items[id].qty++;
         this.totalQty ++;
         this.totalPrice += this.items[id].price;
     };

     this.generateArray = function(){
         var array = [];
         for (var id in this.items){
             array.push(this.items[id]);
         }
         return array;
     };
 }
