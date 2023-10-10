const products =
    [{
        id: "0",
        category: "inyectores",
        specification: "0445116035",
        price: 140377,
        img: "../../img/Inyector Amarok.png"
      },
      {
        id: "1",
        category: "inyectores",
        specification: "0445120007",
        price: 105340,
        img: "../../img/Inyector Ford Cargo 1722.png"
      },
      {
        id: "2",
        category: "inyectores",
        specification: "0414701013",
        price: 267105,
        img: "../../img/Inyector Bomba Stralis.png"
      },
      {
        id: "3",
        category: "inyectores",
        specification: "0445120120",
        price: 74250,
        img: "../../img/Inyector Cummins.png"
      },
      {
        id: "4",
        category: "inyectores",
        specification: "0432191442",
        price: 25430,
        img: "../../img/Inyector Mercedes benz.png"
      },
      {
        id: "5",
        category: "inyectores",
        specification: "97095008292",
        price: 189211,
        img: "../../img/Inyector Toyota.png"
      },
      {
        id: "6",
        category: "bombas",
        specification: "John Deere",
        price: 140377,
        img: "../../img/Bomba John Deere.png"
      },
      {
        id: "7",
        category: "bombas",
        specification: "Toyota Hilux",
        price: 140377,
        img: "../../img/Bomba Toyota Hilux.png"
      },
      {
        id: "8",
        category: "bombas",
        specification: "Amarok",
        price: 140377,
        img: "../../img/Bomba Amarok.png"
      },
      {
        id: "9",
        category: "sensores",
        specification: "MAP",
        price: 140377,
        img: "../../img/Sensor MAP.png"
      },
      {
        id: "10",
        category: "sensores",
        specification: "Presion de Rail",
        price: 140377,
        img: "../../img/Sensor presion de rail.png"
      },
      {
        id: "11",
        category: "sensores",
        specification: "Flujo de Aire",
        price: 140377,
        img: "../../img/Sensor Flujo de Aire.png"
      }]

export const getProducts = () =>  {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },100)
    })
}

export const getProductById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        },100)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsByCategory = products.filter(prod => prod.category === category);
            resolve(productsByCategory);
        })
    })
}