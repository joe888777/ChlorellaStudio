import styled from '@emotion/styled';
const Container=styled.div`
    background:#f7f7f7;
    max-width:1000px;
    margin:0 auto;
    & > img{
        display:block;
        width:100%;
    }
`;
const Header=({img_src,img_alt})=>{
    return(
        <Container>
            <img src={img_src} alt={img_alt}  />
        </Container>
    )
}
export default Header;