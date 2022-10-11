import Logo from '../../assets/Logo.png'
import { ShoppingCartSimple } from 'phosphor-react';
import Location from '../../assets/Location.png'
import { HeaderArea, ButtonMenu, LocationArea} from './styles'
import { NavLink } from 'react-router-dom';
import { List } from 'phosphor-react';


export function Header() {
    return (

        <HeaderArea>
            <div>
                <img src={Logo} />
            </div>


                <NavLink to='/' title='Menu'>
                    <ButtonMenu>MENU <List size={32} color="#141418" /></ButtonMenu>
                </NavLink>



            <LocationArea>
                <div><img src={Location} /></div>
                <nav>

                    <NavLink to='/checkout' title='Checkout'>
                        <a><ShoppingCartSimple size={32} color="#141418" /></a>
                    </NavLink>
                </nav>
            </LocationArea>
        </HeaderArea>
    )
}