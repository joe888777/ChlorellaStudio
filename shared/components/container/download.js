import {css} from '@emotion/react';
const style=css`
    display:flex;
    width:95%;
    max-width:550px;
    margin:0 auto;
    flex-wrap: wrap;
    justify-content:space-between;
`;
const card_style=css`
    width:150px;
    min-width:150px;
    justify-content:center;
    align-items:center;

`;
const img_style=css`
    width:100%;
    height:auto;
`;
const Download=()=>{
    const img_path='https://joe888777.github.io//ChlorellaGameStudio/';
    const download_apple =img_path+'img/appledownload.svg';
<<<<<<< HEAD
    const download_googleplay =img_path+'img/googleplay.png';
=======
    const download_googleplay =img_path+'./img/googleplay.png';
>>>>>>> cf854969b1a9055ef560d0401e971067ff082da2
    return(
        
        <div css={style}>
            <div className="card" css={card_style}><a href="https://apps.apple.com/tw/app/%E7%95%B0%E6%98%9F%E6%8E%A2%E7%B4%A2%E8%80%85/id1566834357" css={css`width:150px;display:block;box-sizing:border-box;`}><img src={download_apple}  layout={'responsive'} width={150} height={59}/></a></div>
            <div className="card" css={card_style}><a href="https://play.google.com/store/apps/details?id=com.ChlorellaGame.TheExplorerOfAliens" css={css`width:150px;display:block;box-sizing:border-box;`}><img src={download_googleplay}  width={150} height={59}/></a></div>
        </div>    
    )
}
export default Download;
