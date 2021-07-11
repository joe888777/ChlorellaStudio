import styled from '@emotion/styled';


const Container=styled.main`
    max-width:1000px;
    width:100%;
    overflow:hidden;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Main=({content})=>{
    return(
        <Container>
        {content}
        </Container>
    )
}
export default Main;