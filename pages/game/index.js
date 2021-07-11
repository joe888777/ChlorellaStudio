import Head from 'next/head';
import {useRouter} from 'next/router';
import Footer from '../../shared/components/container/footer.js'
import Navigation from '../../shared/components/Navigation/';
import Main from '../../shared/components/Container/Main.js';
import Header from '../../shared/components/Container/Header.js';
import Article from '../../shared/components/Container/article.js';
import head_world from '../../public/img/head/head_world.jpg';
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
            <title>異星探索者 | 綠球藻遊戲工作室</title>
            <meta name="description" content="異星探索者 | 綠球藻遊戲工作室" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navigation/>
          <Header img_src={head_world} img_alt={`異星探索者`}/>
          <Main content={
            <div>
              <h1>遊戲-異星探索者</h1>
              <Article content={
                `「異星探索者」是一款適合打發時間的休閒遊戲，快來探索神秘的星球，蒐集各種研究資料，合成出獨屬於你的異星生物吧！ “The explorer of aliens” is a casual game suitable for killing time. Explore the mysterious planet, collect various research materials, and synthesize your own creatures!`
               }/>
              <h2>世界觀</h2>
              <Article content={
                `多元宇宙中的人類居住在環星系，面對著相鄰星系的敵人-佩克里厄族。為了爭奪各個資源豐富的星球，兩族多年來爭戰不斷，但也逐漸發展出了獨屬於自己種族的文明。近年來，在人類眼中象徵野蠻的佩族開始有了不同以往的行動，而就在某個名做希蘇拉的小行星上，佩族的陰謀悄悄拉開序幕。 In diversified cosmos, human beings live in the ring galaxy and face the enemy of the neighboring galaxy-the Peculiar. To compete for resource-rich planets, the two races have been fighting for many years. In recent years, the Peculiar, a symbol of barbarism, took actions differently from the past, and on an asteroid named Scissura, their conspiracy has appeared.`
               }/>
            </div>
          }/>
          
          <Footer/>
        </div>
      )
}
export default Contact;