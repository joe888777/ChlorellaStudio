import {css} from '@emotion/react';
import download_apple from '../../../public/appledownload.svg';
import download_googleplay from '../../../public/googleplay.png';
import Image from 'next/image';
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
    return(
        
        <div css={style}>
            <div className="card" css={card_style}><a href="https://apps.apple.com/tw/app/%E7%95%B0%E6%98%9F%E6%8E%A2%E7%B4%A2%E8%80%85/id1566834357" css={css`width:150px;display:block;box-sizing:border-box;`}><Image src={download_apple}  layout={'responsive'} width={150} height={59}/></a></div>
            <div className="card" css={card_style}><a href="https://play.google.com/store/apps/details?id=com.ChlorellaGame." css={css`width:150px;display:block;box-sizing:border-box;`}><Image src={download_googleplay}  width={150} height={59}/></a></div>
        </div>    
    )
}
export default Download;
