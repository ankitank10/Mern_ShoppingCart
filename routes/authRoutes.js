

module.exports = (app) => {
    app.get('/api/getProducts', (req, res) => {
      console.log('api servedddddd');
        debugger;
        const data = {
            Products: [
              {
                index: 1,
                name: "Cotton T-Shirt, Mediumfdsafd",
                price: 1.99,
                count: 1
              },
              {
                index: 2,
                name: "Baseball Cap, One Size",
                price: 2.99,
                count: 2
              },
              {
                index: 3,
                name: "Swim Shorts, Medium",
                price: 3.99,
                count: 1
              }
            ]
          };
        res.send('fdasfdsa');
    })

}