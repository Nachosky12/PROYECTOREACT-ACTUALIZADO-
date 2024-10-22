export const products = [
    {
        id: 1,
        name: 'Poleras',
        price: 299,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'poleras'
    },
    {
        id: 2,
        name: 'Zapatos',
        price: 300,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'zapatos'
    },one
    {
        id: 3,
        name: 'Pantalones',
        price: 310,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'pantalones'
    },
    {
        id: 4,
        name: 'Abrigos',
        price: 310,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'abrigos'
    },
    {
        id: 5,
        name: 'Camisas',
        price: 299,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'camisas'
    },
    {
        id: 6,
        name: 'Buzos',
        price: 300,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'buzos'

    },
    {
        id: 7,
        name: 'Accesorios',
        price: 310,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'accesorios'
    },
    {
        id: 8,
        name: 'Gorras',
        price: 310,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'gorras'
    },
    {
        id: 9,
        name: 'Chaquetas',
        price: 299,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'chaquetas'
    },
    {
        id: 10,
        name: 'Zapatillas',
        price: 300,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'zapatillas'
    },
    {
        id: 11,
        name: 'Bañadores',
        price: 310,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'bañadores'
    },
    {
        id: 12,
        name: 'Hoddies',
        price: 310,
        despcription: 'texto de relleno',
        stock: 5,
        img: '',
        category: 'hoddies'
    },
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products)
        }, 3000);
    })
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};