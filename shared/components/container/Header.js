import styled from '@emotion/styled';
import Image from 'next/image';
import {css} from '@emotion/react';
const Container=styled.div`
    background:#f7f7f7;
    max-width:1000px;
    margin:0 auto;
`;
const Header=({img_src,img_alt})=>{
    return(
        <Container>
            <Image src={img_src} alt={img_alt}  />
        </Container>
    )
}
export default Header;