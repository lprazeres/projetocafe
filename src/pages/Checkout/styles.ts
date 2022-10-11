import styled from "styled-components";

export const CheckoutArea = styled.div`
display: flex;


gap: 2rem;
justify-content: center;


h1, h2, h3{
    font-size: 1rem;
    font-weight: bold;
}
`;

export const SelectedCoffeeArea = styled.div`

width:  30rem;
padding: 15px;

display: flex;
justify-content: space-around;

font-weight: bold;

background: ${(props => props.theme['gray-300'])};
color: ${(props => props.theme['gray-900'])};

border-radius: 15px;

`;

export const InformationArea = styled.div`
display: flex;
justify-content: center;
gap: 15px;
flex-direction: column;
align-items: center;
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

export const AreaOptionCoffee = styled.div`
display: flex;
flex-direction: column;
gap: 0.8rem;
`;

export const ButtonDelete = styled.button`
color: ${(props => props.theme['gray-900'])}; 
font-weight: bold;
background: ${(props => props.theme['gray-500'])};
padding: 0 0.5rem;
`;

export const FormInputs = styled.div`
display: flex;
flex-direction: column;

padding: 2rem;
gap: 1.5rem;
background: ${(props => props.theme['gray-300'])};
`;

export const FormInputsTitle = styled.div``;

export const FormInputsContent = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const InputForm = styled.input`
background: ${(props => props.theme['gray-500'])};
color: ${(props => props.theme['gray-900'])};
font-style: bold;
border: none;
border-radius: 15px;
padding: 0 0.5rem;
font-weight: bold;

height: 2.5rem;
font-size: 1.125rem;


&::placeholder{
    color: ${(props => props.theme['gray-900'])}; 
    font-weight: bold;
}
`;

export const TaskInput = styled(InputForm)`
width: 100%;
`;
export const OpcionalInput = styled(InputForm)`
width: 50%;
`;

export const InputRow = styled.div`
display: flex;
gap: 1rem;
`;

export const ButtonGroupPosition = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const ButtonGroupArea = styled.div`
display: flex;
gap: 2rem;
justify-content: center;
align-items: center;
`;
export const SubmitButtonArea = styled.div`
display: flex;
gap: 2rem;
justify-content: center;
align-items: center;
`;

export const ResponseArea = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 2rem;
background: ${(props => props.theme['gray-300'])};
color: ${(props => props.theme['gray-900'])};
border-radius: 15px;
font-weight: bold;
`;

export const ResponsePayment = styled.div`
display: flex;
justify-content: space-between;
gap: 0.4rem;
`;

export const MoneySpace = styled.div`
display: flex;
gap: 0.5rem;
`;
