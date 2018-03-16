

module.exports = (app) => {
  let data = {
    Products: [
      {
        index: 0,
        name: "Cotton T-Shirt, Medium",
        price: 1.99,
        count: 1
      },
      {
        index: 1,
        name: "Baseball Cap, One Size",
        price: 2.99,
        count: 2
      },
      {
        index: 2,
        name: "Swim Shorts, Medium",
        price: 3.99,
        count: 1
      }
    ],
    PurchaseComplete: false

  };
    app.get('/api/getProducts', (req, res) => {
        res.send(data.Products);
    })
    app.post('/api/buyNow', (req, res) => {
      console.log('cart received');
      if(req){
        data.PurchaseComplete = true;
        res.send(data.PurchaseComplete);
      }
        
    })

}