import Head from 'next/head';
import {useRouter} from 'next/router';
import Footer from '../shared/components/container/footer.js'
import Navigation from '../shared/components/navigation'
import Main from '../shared/components/Container/main.js';
import Header from '../shared/components/container/header.js';
import {css} from '@emotion/react';
import Article from '../shared/components/Container/article.js';

export default function Home() {
  const router=useRouter();
  const img_path='https://joe888777.github.io/ChlorellaStudio/';
  const head_home=img_path+'img/head/head_home.jpg';
  return (
    <div >
      <Head>
        <title>綠球藻遊戲工作室</title>
        <meta name="description" content="綠球藻遊戲工作室" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navigation/>
      <Header img_src={head_home} img_alt={`首頁`}/>
      <Main content={
        <div>
          <h1>綠球藻遊戲工作室</h1>
          <Article content={`  我們是綠球藻遊戲工作室，一個來自台灣的新創遊戲工作室，我們致力於創作出與眾不同的遊戲，希望可以成為改變遊戲產業的一個齒輪!目前開發的遊戲有異星探索者。 We are Chlorella Game Studio , a new game studio from Taiwan , we are committed to creating mobile game that is out of the ordinary , we hope that we can become a gear to change all of the game develop environment!` }/>
        </div>
      }/>
      <Footer/>
    </div>
  )
}
