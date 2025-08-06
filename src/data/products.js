const products = [
  // poleras
  {
    id: 1,
    name: "Polera Acid Pixel",
    description: "Polera blanca con estampado glitch digital en tonos neón. Corte relajado, perfecta para destacar en la escena streetwear.",
    stock: 5,
    price: 16990,
    image: "/img/01.webp",
    category: "poleras",
  },
  {
    id: 2,
    name: "Polera Static Noise",
    description: "Diseño inspirado en la televisión analógica. Textura suave, ideal para combinar con outfits monocromáticos.",
    stock: 5,
    price: 15990,
    image: "/img/02.webp",
    category: "poleras",
  },
  {
    id: 3,
    name: "Polera Hype Mirage",
    description: "Estampado desértico urbano con detalles minimalistas. Perfecta para looks relajados.",
    stock: 5,
    price: 14990,
    image: "/img/03.webp",
    category: "poleras",
  },
  {
    id: 4,
    name: "Polera Core Shadow",
    description: "Polera negra básica con costuras visibles y ajuste recto. El esencial de todo closet urbano.",
    stock: 5,
    price: 12990,
    image: "/img/04.webp",
    category: "poleras",
  },
  {
    id: 5,
    name: "Polera Broken Dreams",
    description: "Gráfica desgastada con efecto vintage. Fabricada en algodón reciclado.",
    stock: 5,
    price: 17990,
    image: "/img/05.webp",
    category: "poleras",
  },
  {
    id: 6,
    name: "Polera Cyberpunk Rise",
    description: "Diseño futurista con detalles fluorescentes. Ideal para salidas nocturnas.",
    stock: 5,
    price: 16990,
    image: "/img/06.webp",
    category: "poleras",
  },
  {
    id: 7,
    name: "Polera Tokyo Drift",
    description: "Inspirada en la cultura urbana japonesa. Tipografía kanji con acabado mate.",
    stock: 5,
    price: 15990,
    image: "/img/07.webp",
    category: "poleras",
  },
  {
    id: 8,
    name: "Polera Ghost Tag",
    description: "Arte estilo graffiti con colores pastel. Ideal para días relajados.",
    stock: 5,
    price: 13990,
    image: "/img/08.webp",
    category: "poleras",
  },
  {
    id: 9,
    name: "Polera Reboot",
    description: "Gráfica glitch con mensaje oculto. Parte de la colección cápsula 'Neo-Street'.",
    stock: 5,
    price: 16990,
    image: "/img/09.webp",
    category: "poleras",
  },

  // polerones
  {
    id: 10,
    name: "Polerón Phantom Fade",
    description: "Sudadera oversize con diseño tie-dye en tonos gris y negro. Confeccionada en algodón premium.",
    stock: 5,
    price: 29990,
    image: "/img/010.webp",
    category: "polerones",
  },
  {
    id: 11,
    name: "Polerón Voltage Black",
    description: "Polerón negro con relámpagos bordados. Interior afelpado y capucha amplia.",
    stock: 5,
    price: 31990,
    image: "/img/011.webp",
    category: "polerones",
  },
  {
    id: 12,
    name: "Polerón Bleach Drop",
    description: "Estilo desteñido con manchas artesanales únicas. Cada unidad es distinta.",
    stock: 5,
    price: 30990,
    image: "/img/012.webp",
    category: "polerones",
  },
  {
    id: 13,
    name: "Polerón Dark Signal",
    description: "Con capucha doble y bolsillo canguro reforzado. Estilo oscuro y agresivo.",
    stock: 5,
    price: 29990,
    image: "/img/013.webp",
    category: "polerones",
  },
  {
    id: 14,
    name: "Polerón Vortex Pink",
    description: "Diseño espiral rosa eléctrico. Destaca por su textura suave y vibrante.",
    stock: 5,
    price: 28990,
    image: "/img/014.webp",
    category: "polerones",
  },
  {
    id: 15,
    name: "Polerón Midnight Code",
    description: "Código binario en vinilo reflectante. Inspirado en la cultura digital.",
    stock: 5,
    price: 31990,
    image: "/img/015.webp",
    category: "polerones",
  },
  {
    id: 16,
    name: "Polerón Trap Jungle",
    description: "Gráfica de selva urbana y camuflaje suave. Comodidad con estilo.",
    stock: 5,
    price: 28990,
    image: "/img/016.webp",
    category: "polerones",
  },
  {
    id: 17,
    name: "Polerón Drift Camo",
    description: "Camo con detalles en tonos crema. Streetwear funcional para todo clima.",
    stock: 5,
    price: 29990,
    image: "/img/017.webp",
    category: "polerones",
  },
  {
    id: 18,
    name: "Polerón Zero Gravity",
    description: "Estética espacial con ilustración bordada. Corte cómodo y futurista.",
    stock: 5,
    price: 31990,
    image: "/img/018.webp",
    category: "polerones",
  },

  // pantalones
  {
    id: 19,
    name: "Pantalón Cargo Void",
    description: "Cargo negro con múltiples bolsillos y detalles reflectantes. Cintura elástica ajustable.",
    stock: 5,
    price: 26990,
    image: "/img/019.webp",
    category: "pantalones",
  },
  {
    id: 20,
    name: "Pantalón Raw Cut",
    description: "Jeans con bordes deshilachados y ajuste slim. Tono denim oscuro.",
    stock: 5,
    price: 25990,
    image: "/img/020.webp",
    category: "pantalones",
  },
  {
    id: 21,
    name: "Pantalón Acid Trip",
    description: "Estilo washed en tonos grises. Tela suave y corte relajado.",
    stock: 5,
    price: 24990,
    image: "/img/021.webp",
    category: "pantalones",
  },
  {
    id: 22,
    name: "Pantalón Stealth Tech",
    description: "Diseño técnico con cierres invisibles y líneas modernas. Ideal para el movimiento.",
    stock: 5,
    price: 27990,
    image: "/img/022.webp",
    category: "pantalones",
  },
  {
    id: 23,
    name: "Pantalón Distress Rebel",
    description: "Jeans con roturas y parches. Un clásico del street con carácter.",
    stock: 5,
    price: 26990,
    image: "/img/023.webp",
    category: "pantalones",
  },
  {
    id: 24,
    name: "Pantalón Dune Flex",
    description: "Tono arena con tela flexible. Perfecto para días largos con estilo.",
    stock: 5,
    price: 25990,
    image: "/img/024.webp",
    category: "pantalones",
  },
  {
    id: 25,
    name: "Pantalón Metro Track",
    description: "Pantalón deportivo urbano con líneas laterales blancas. Comodidad para el día a día.",
    stock: 5,
    price: 23990,
    image: "/img/025.jpg",
    category: "pantalones",
  },
  {
    id: 26,
    name: "Pantalón Fragmento Gris",
    description: "Diseño asimétrico con cortes modernos. Inspirado en la arquitectura brutalista.",
    stock: 5,
    price: 26990,
    image: "/img/026.webp",
    category: "pantalones",
  },
  {
    id: 27,
    name: "Pantalón Skyline Black",
    description: "Negro completo con costuras visibles. Versátil y elegante en el estilo urbano.",
    stock: 5,
    price: 25990,
    image: "/img/027.jpeg",
    category: "pantalones",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === Number(productId));
      resolve(product);
    }, 3000);
  });
};

export {getProducts, getProductById };
