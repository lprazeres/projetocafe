import { Header } from "../../components/Header";
import {Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { LayoutContainer } from "./styles";


export function DefaultLayout(){
    return(
        <div>
            <LayoutContainer>            
            <Container>
            <Header />
            <Outlet />
            </Container>
            </LayoutContainer>
        </div>
    )
}