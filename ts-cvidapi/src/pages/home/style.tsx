import styled from 'styled-components';

type ListContent = {
    ativo: boolean
}

export const Wrapper = styled.ul`
padding: 0;
display: flex;
flex-wrap: wrap;
`;

export const LiWrapper = styled.li`
list-style: none;
flex: 0 0 50%;
text-align: center;

@media (min-width:420px){
    flex: 0 0 33.33%;
}
`;

export const Card = styled.div<ListContent>`
background-color: ${props => props.ativo ? '#6e6161' : '#918989'};
margin: 1px;
padding: 10px 0;
cursor: pointer;
`; 

export const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 10px;
`;

export const ChartWrapper = styled.div`
max-width: 700px;
margin: 0 auto;
`;