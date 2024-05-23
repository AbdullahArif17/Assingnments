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

    let colorChange =  (products:Product, newColor) =>{
      
    }


   


    
  
