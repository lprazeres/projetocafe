import Intro from '../../assets/Intro.png';
import { CardArea, HomeArea, TypeOfCoffeeArea, ContextArea, ComercialArea, ButtonsArea, RowCardArea, SelectedCoffeeArea, InformationArea } from './styles';
import { ShoppingCartSimple } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import { CoffeeContext } from '../../context/CoffeeContext';




export function Home() {

    const { products, handleLessCoffee, handlePlusCoffee }: any = useContext(CoffeeContext)


    return (
        <HomeArea>
            <img src={Intro} />
            <Row xs={1} md={3} className="g-4">
                <RowCardArea>
                    {products.map(coffee => {
                        return (
                            <CardArea>
                                <div>{coffee.img}</div>
                                <TypeOfCoffeeArea>
                                    <span>{coffee.typeOne}</span>
                                    <span>{coffee.typeTwo}</span>
                                </TypeOfCoffeeArea>
                                <div>{coffee.title}</div>
                                <ContextArea>{coffee.context}</ContextArea>
                                <ComercialArea>
                                    <span>R$</span><span>{coffee.price}</span>
                                    <ButtonsArea>
                                        <span><button onClick={event => handleLessCoffee(event, coffee.id)}>-</button></span>
                                        <span><div>{coffee.countCoffee}</div></span>
                                        <span><button onClick={event => handlePlusCoffee(event, coffee.id)}>+</button></span>
                                        <a><NavLink to='/checkout' title='Checkout'><ShoppingCartSimple size={32} color="#141418" /></NavLink></a>
                                    </ButtonsArea>
                                </ComercialArea>
                            </CardArea>
                        )
                    })}
                </RowCardArea>
            </Row>
        </HomeArea>
    )
}