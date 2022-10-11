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
            }}>
            {children}
        </CoffeeContext.Provider>
    )
}