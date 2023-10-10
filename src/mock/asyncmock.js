const products = [
    [{
        id: "0",
        category: "Inyector",
        specification: "0445116035",
        price: 140377,
        img: "./images/Inyectores/Inyector Amarok.png"
      },
      {
        id: "1",
        category: "Inyector",
        specification: "0445120007",
        price: 105340,
        img: "./images/Inyectores/Inyector Ford Cargo 1722.png"
      },
      {
        id: "2",
        category: "Inyector",
        specification: "0414701013",
        price: 267105,
        img: "./images/Inyectores/Inyector Bomba Stralis.png"
      },
      {
        id: "3",
        category: "Inyector",
        specification: "0445120120",
        price: 74250,
        img: "./images/Inyectores/Inyector Cummins.png"
      },
      {
        id: "4",
        category: "Inyector",
        specification: "0432191442",
        price: 25430,
        img: "./images/Inyectores/Inyector Mercedes benz.png"
      },
      {
        id: "5",
        category: "Inyector",
        specification: "97095008292",
        price: 189211,
        img: "./images/Inyectores/Inyector Toyota.png"
      },
      {
        id: "6",
        category: "Bomba",
        specification: "John Deere",
        price: 140377,
        img: "./images/Inyectores/Bomba John Deere.png"
      },
      {
        id: "7",
        category: "Bomba",
        specification: "Toyota Hilux",
        price: 140377,
        img: "./images/Inyectores/Bomba Toyota Hilux.png"
      },
      {
        id: "8",
        category: "Bomba",
        specification: "Amarok",
        price: 140377,
        img: "./images/Inyectores/Bomba Amarok.png"
      },
      {
        id: "9",
        category: "Sensor",
        specification: "MAP",
        price: 140377,
        img: "./images/Inyectores/Sensor MAP.png"
      },
      {
        id: "10",
        category: "Sensor",
        specification: "Presion de Rail",
        price: 140377,
        img: "./images/Inyectores/Sensor presion de rail.png"
      },
      {
        id: "11",
        category: "Sensor",
        specification: "Flujo de Aire",
        price: 140377,
        img: "./images/Inyectores/Sensor Flujo de Aire.png"
      }]
]

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