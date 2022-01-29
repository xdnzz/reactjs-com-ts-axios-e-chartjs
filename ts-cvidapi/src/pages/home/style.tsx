import styled from 'styled-components';




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

export const Card = styled.div`
background-color: #444040;
margin: 1px;
padding: 10px 0;
`;