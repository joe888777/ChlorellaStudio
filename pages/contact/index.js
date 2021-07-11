import Head from 'next/head';
import {useRouter} from 'next/router';
import Footer from '../../shared/components/container/footer.js'
import Navigation from '../../shared/components/Navigation/';
import Main from '../../shared/components/Container/Main.js';
import Header from '../../shared/components/Container/Header.js';
import Article from '../../shared/components/Container/article.js';
import head_home from '../../public/img/head/head_home.jpg';
import Image from 'next/image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
const style=css`
display:flex;
flex-wrap: wrap;
& > li{
    text-align:left;
    margin:20px 0 0 0;
}
`;
const ContactIcon=styled.div`
border-radius: 1rem;
border:4px #000 solid;
`;
const Contact=()=>{
    
    const img_src='../img/head/head_home.png';
    const img_alt="聯絡我們";
    const href='/';
    return (
        <div >
          <Head>
            <title>綠球藻遊戲工作室</title>
            <meta name="description" content="綠球藻遊戲工作室" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navigation/>
          <Header img_src={head_home} img_alt={`首頁`}/>
          <Main content={
            <div>
              <h1>聯絡我們</h1>
              <Article content={
                <ul css={style}>
                  <li>Email：chlorella456@gmail.com</li>
                  <li><a href="https://www.facebook.com/%E7%95%B0%E6%98%9F%E6%8E%A2%E7%B4%A2%E8%80%85-101549205438251">粉絲專頁</a></li>
                  <li><a href="">Twitter</a> </li>
                  <li><a href="">Discord</a></li>
                </ul>



               }/>
            </div>
          }/>
          
          <Footer/>
        </div>
      )
}
export default Contact;