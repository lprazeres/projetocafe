import { createContext, useState, useEffect } from 'react';
import CoffeeOne from '../assets/CoffeeOne.png'
import CoffeeTwo from '../assets/CoffeeTwo.png';
import CoffeeThree from '../assets/CoffeeThree.png';
import { useForm } from 'react-hook-form';

export const CoffeeContext = createContext({})


export function Coffee({ children }: any) {

    interface listOfCoffees {
        id: number
        typoOne: string
        typeTwo: string
        title: string
        context: string
        price: number
    }

    const listOfCoffees = [{
        id: 1,
        img: <img src={CoffeeOne} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: null,
        title: 'Expresso Tradicional',
        context: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 2,
        img: <img src={CoffeeTwo} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: null,
        title: 'Expresso Americano',
        context: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 3,
        img: <img src={CoffeeThree} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: 'Sem açúcar',
        title: 'Expresso Cremoso',
        context: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 4,
        img: <img src={CoffeeTwo} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: 'Gelado',
        title: 'Expresso Gelado',
        context: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 5,
        img: <img src={CoffeeThree} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: 'Com leite',
        title: 'Café com Leite',
        context: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 6,
        img: <img src={CoffeeOne} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: 'Com leite',
        title: 'Latte',
        context: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 7,
        img: <img src={CoffeeTwo} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: 'Com leite',
        title: 'Capuccino',
        context: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
        countCoffee: 0
    },    
    {
        id: 8,
        img: <img src={CoffeeOne} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: 'Com leite',
        title: 'Macchiato',
        context: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 9,
        img: <img src={CoffeeThree} alt="" />,
        typeOne: 'Tradicional',
        typeTwo: 'Com leite',
        title: 'Macchiato',
        context: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 10,
        img: <img src={CoffeeTwo} alt="" />,
        typeOne: 'Espcial',
        typeTwo: 'Com leite',
        title: 'Chocolate Quente',
        context: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9,
        countCoffee: 0
    },
    {
        id: 11,
        img: <img src={CoffeeThree} alt="" />,
        typeOne: 'Espcial',
        typeTwo: 'Com leite',
        title: 'Cubano',
        context: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9,
        countCoffee: 0
    },
    ];
    const [products, setProducts] = useState(listOfCoffees);
    const [totalPriceCoffee, setTotalPrice] = useState('');
    const [finalPriceToPay, setFinalPriceToPay] = useState('');
    

    function handleLessCoffee(event: any, id: any) {
        const updatedProducts: any = products.map(product => {
            if (product.id == id && product.countCoffee > 0) {
                const updatedProduct = {
                    ...product,
                    countCoffee: product.countCoffee - 1
                }
                return updatedProduct;
            }
            return product;
        });
        setProducts(updatedProducts);

        const priceCoffee = parseFloat(updatedProducts.reduce((prevVal, elem) => prevVal - (elem.countCoffee * elem.price)*(-1), 0).toFixed(2))
        const finalPrice =  priceCoffee + 3.5 
        setTotalPrice(priceCoffee)
        setFinalPriceToPay(finalPrice)
    }

    function handlePlusCoffee(event: any, id: any) {
        const updatedProducts: any = products.map(product => {
            if (product.id == id) {
                const updatedProduct = {
                    ...product,
                    countCoffee: product.countCoffee + 1
                }
                return updatedProduct;
            }
            return product;
        });
        setProducts(updatedProducts);

        const priceCoffee = parseFloat(updatedProducts.reduce((prevVal, elem) => prevVal + (elem.countCoffee * elem.price), 0).toFixed(2))
        const finalPrice =  priceCoffee + 3.5
        setTotalPrice(priceCoffee)
        setFinalPriceToPay(finalPrice)
    }

    function handleDeleteCoffee(event: any, id: any) {
    
        const updatedProducts: any = products.map(product => {
            if (product.id == id && product.countCoffee > 0) {
                const updatedProduct = {
                    ...product,
                    countCoffee: 0
                }
                return updatedProduct;
            }
            return product;
        });
        setProducts(updatedProducts);
        const priceCoffee = parseFloat(updatedProducts.reduce((prevVal, elem) => prevVal - (elem.countCoffee * elem.price)*(-1), 0).toFixed(2))
        const finalPrice =  priceCoffee + 3.5
        setTotalPrice(priceCoffee)
        setFinalPriceToPay(finalPrice)
    }

    const { register, handleSubmit, watch, reset } = useForm()
    const firstDados: any = [];
    const [clients, setClient] = useState(firstDados)
    const [paymentType, setPaymentType] = useState('');

    function handlePayment (paymentType: any){
        setPaymentType(paymentType)
        console.log(paymentType)
    }

    const cep = watch('cep')
    const rua = watch('rua')
    const numero = watch('numero')
    const bairro = watch('bairro')
    const cidade = watch('cidade')
    const uf = watch('uf')


    function handleCheckout(data: any) {
        const newClient = {
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            bairro: data.bairro,
            cidade: data.cidade,
            uf: data.uf,
        }
        setClient([...clients, newClient])
        reset()
    }

    return (

        <CoffeeContext.Provider
            value={{
                listOfCoffees,
                products,
                handleLessCoffee,
                handlePlusCoffee,
                setProducts,
                setTotalPrice,
                totalPriceCoffee,
                handleDeleteCoffee,
                finalPriceToPay,
                handleSubmit,
                handleCheckout,
                register,
                clients,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                uf,
                handlePayment,
                paymentType
            }}>
            {children}
        </CoffeeContext.Provider>
    )
}