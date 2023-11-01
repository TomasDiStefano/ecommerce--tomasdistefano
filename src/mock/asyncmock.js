const products =
    [{
      id: "0",
      category: "inyector",
      name: "Inyector Volkswagen Amarok 2.0L",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Inyector Amarok.png",
      },
      {
      id: "1",
      category: "inyector",
      name: "Inyector Ford Cargo 1722",
      price: 105340,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Inyector Ford Cargo 1722.png"
      },
      {
      id: "2",
      category: "inyector",
      name: "Inyector Stralis 410NR",
      price: 267105,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Inyector Bomba Stralis.png"
      },
      {
      id: "3",
      category: "inyector",
      name: "Inyector Ford Cargo 2042",
      price: 74250,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Inyector Cummins.png"
      },
      {
      id: "4",
      category: "inyector",
      name: "Inyector Atego 1725",
      price: 25430,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Inyector Mercedes benz.png"
      },
      {
      id: "5",
      category: "inyector",
      name: "Inyector Hilux 3.0L",
      price: 189211,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Inyector Toyota.png"
      },
      {
      id: "6",
      category: "bomba",
      name: "Bomba John Deere 8335R",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Bomba John Deere.png"
      },
      {
      id: "7",
      category: "bomba",
      name: "Bomba Hilux 3.0",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Bomba Toyota Hilux.png"
      },
      {
      id: "8",
      category: "bomba",
      name: "Bomba Amarok 2.0L",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Bomba Amarok.png"
      },
      {
      id: "9",
      category: "sensor",
      name: "Sensor presión de turbo",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Sensor MAP.png"
      },
      {
      id: "10",
      category: "sensor",
      name: "Sensor presion de rail",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Sensor presion de rail.png"
      },
      {
      id: "11",
      category: "sensor",
      name: "Sensor flujo de aire",
      price: 140377,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      stock: 20,
      img: "/img/Sensor Flujo de Aire.png"
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