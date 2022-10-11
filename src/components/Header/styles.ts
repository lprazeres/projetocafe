import styled from 'styled-components'

export const HeaderArea = styled.div`
margin-bottom: 3rem;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const ButtonArea = styled.button`
display: flex;
align-items: center;
`;

export const ButtonMenu = styled.button`
width: 6rem;
height: 3.5rem;
border-radius: 2rem;


color: ${(props => props.theme['gray-800'])};
background: ${(props => props.theme['gray-300'])};

border: none;

&:hover{
    background: ${(props => props.theme['gray-800'])};
    color: ${(props => props.theme['gray-300'])};
}
`;

export const LocationArea = styled.div`
display: flex;
gap: 0.8rem;

a:hover{
    border-bottom: 2px solid ${(props => props.theme['gray-900'])};
}
`;
