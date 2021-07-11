import styled from '@emotion/styled';
import Download from './download.js';
const Container=styled.footer`
    background:#000;
    color:#fff;
    width:100%;
    padding:40px 0 40px 0;
    & > ul{
        list-style:none;
        text-align:center;
        & > li{
            margin-top:10px;
            font-size:16px;
        }
    }
`;

const FooterContainer=({content})=>{
    return(
        <Container>
        {content}
        </Container>
    )
}
const Footer=()=>{
    return(
    <FooterContainer content={
    <>
        <ul>
            <li>Copyright ©綠球藻遊戲工作室</li>
            <li>聯絡方式：chlorella456@gmail.com</li>
            <li>公司位置：高雄市左營區新莊一路393號五樓之七</li>
        </ul>
        <Download/>
    </>}
    />
    )
}
export default Footer;