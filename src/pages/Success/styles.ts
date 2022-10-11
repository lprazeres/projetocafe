import styled from 'styled-components';

export const SuccessMainArea = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`;

export const SuccessTextArea = styled.div`
display: flex;
flex-direction: column;
gap: 2.5rem;
`;

export const SuccessImageArea = styled.div``;

export const SuccessTextInformationArea = styled.div`
border: 1px solid ${(props => props.theme['gray-900'])};
border-radius: 3rem;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const SuccessContextClientArea = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`;

export const SuccessTitleText = styled.div`
font-weight: bold;
`;

export const YellowTitle = styled(SuccessTitleText)`
color: ${(props => props.theme['yellow-500'])};
font-size: 1.5rem;
`;

export const BoldText = styled.span`
font-weight: bold;
`;