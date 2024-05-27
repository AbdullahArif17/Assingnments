type Product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOptions: string[]
    },
}

const product1:Product = 
    {
      name: 'T-Shirt',
      price: 20.00,
      inventory: {
        stock: 100,
        colorOptions: ['red', 'blue', 'green']
      }
    }
const product2:Product = {
      name: 'Jeans',
      price: 40.00,
      inventory: {
        stock: 50,
        colorOptions: ['blue', 'black', 'white']
      }
    }
const product3:Product = {
      name: 'Sneakers',
      price: 60.00,
      inventory: {
        stock: 75,
        colorOptions: ['white', 'black', 'red']
      }
    }

    const products = [product1,product2,product3]

    let colorChange =  (products: Product, newColor:any) => {
      products['inventory'].colorOptions === newColor
      if(newColor == 'red' ){
        products.price = products.price + (products.price/ 100) * 10
      }else if(newColor == 'black'){
        products.price = products.price + (products.price/ 100) * 15
      }else if(newColor == 'white'){
        products.price = products.price + (products.price/ 100) * 5
      }else if(newColor == 'blue'){
        products.price = products.price + (products.price/ 100) * 10
      }
      return products;
    }

    console.log(colorChange(product1 ,'black'))
    console.log(colorChange(product2 ,'white'))
    console.log(colorChange(product3 ,'red'))


   


    
  
