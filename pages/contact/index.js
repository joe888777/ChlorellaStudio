import Head from 'next/head';
import Footer from '../../shared/components/container/footer.js'
import Navigation from '../../shared/components/navigation';
import Main from '../../shared/components/Container/main.js';
import Header from '../../shared/components/container/header.js';
import Article from '../../shared/components/Container/article.js';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

const style=css`
display:flex;
flex-wrap: wrap;
justify-content:space-around;
& > li{
    text-align:left;
    margin:20px 0 0 0;
    width:15%;
    > a {
        display:block;
    }
}
`;
const ContactIcon=styled.div`
border-radius: 1rem;
border:4px #000 solid;
padding:20px 20px;
min-width:100px;
width:100%;
& > img {
    width:100%;
    display:block;
}
`;
const Contact=()=>{
    const img_path='https://github.com/joe888777/ChlorellaStudio/tree/main/public/';
    const email = img_path+'img/email.png';
    const fb = img_path+'img/facebook.png';
    const twitter = img_path+'img/twitter.png';
    const discord =img_path+'/img/discord.png';
    const  head_home = img_path+'img/head/head_home.jpg';
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
                    <li>
                        <a href="mailto:chlorella456@gmail.com">
                            <ContactIcon>
                                <img src={email}/>
                            </ContactIcon>  
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/%E7%95%B0%E6%98%9F%E6%8E%A2%E7%B4%A2%E8%80%85-101549205438251">
                            <ContactIcon>
                                <img src={fb}/>
                            </ContactIcon>
                        </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/ChlorellaGame">
                        <ContactIcon>
                            <img src={twitter}/>
                        </ContactIcon>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.com/invite/Vm2hm8PYG7">
                            <ContactIcon>
                                <img src={discord}/>
                            </ContactIcon>
                        </a>
                    </li>
                </ul>
               }/>
            </div>
          }/>
          
          <Footer/>
        </div>
      )
}
export default Contact;