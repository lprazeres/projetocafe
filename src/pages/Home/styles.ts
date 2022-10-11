import styled from 'styled-components'

export const HomeArea = styled.div`

display: flex;
flex-direction: column;
align-items: center;


img{
    width: 74rem;
    height: 400px;
}
`;

export const RowCardArea = styled.div`
display: flex;
gap: 15px;
align-items: center;
margin-left: 150px;
`;

export const CardArea = styled.div`

padding: 15px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

gap: 10px;
background: ${(props => props.theme['gray-300'])};
color: ${(props => props.theme['gray-900'])};
font-weight: bold;
border-radius: 15px;

position: relative;

img{
    width: 10rem;
    height: 10rem;
    &:hover{
    opacity: 0.6;
    }
}
`;

export const TypeOfCoffeeArea = styled.div`
display: flex;
gap: 5px;
font-weight: bold;
justify-content: center;
align-items: center;

font-size: 0.5rem;
color: ${(props => props.theme['green-700'])};

background: ${(props => props.theme['green-300'])};

border-radius: 8px;
padding: 2px;
`;

export const ContextArea = styled.div`
font-size: 0.7rem;
opacity: 0.4;
`;

export const ComercialArea = styled.div`
display: flex;
align-items: center;
gap: 15px;

`;
export const ButtonsArea = styled.div`
display: flex;
gap: 5px;
background: ${(props => props.theme['gray-500'])};
border-radius: 5px;
align-items: center;

button{
    width: 2.5rem;
    background: ${(props => props.theme['gray-500'])};
    border: none;
    border-right: 1px solid black;
    border-left: 1px solid black;
&:hover{
       opacity: 0.4;
    }
}
a{
    &:hover{
        opacity: 0.4; 
    }
}
`;


export const SelectedCoffeeArea = styled.div`
width:  30rem;
border: 1px solid red;
padding: 15px;

display: flex;
justify-content: space-around;
align-items: center;
font-weight: bold;

background: ${(props => props.theme['gray-300'])};
color: ${(props => props.theme['gray-900'])};

img{
    width: 10rem;
    height: 10rem;
    &:hover{
    opacity: 0.6;
    }
}
`;

export const InformationArea = styled.div`
display: flex;
justify-content: center;
gap: 15px;
flex-direction: column;
align-items: center;
`;


