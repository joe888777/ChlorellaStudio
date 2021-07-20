import {css} from '@emotion/react';
import Link from 'next/link';
import styled from '@emotion/styled';
const style=css`
display:flex;
flex-wrap:wrap;
align-items:center;
width:100%;
max-width:1000px;
padding:0 15px;
margin:0 auto;
justify-content:space-between;
@media(max-width:550px){
   &{
       padding:10px;
    } 
}
`;
const nav_style=css`
    background:#000;
    color:#fff;
    font-weight:bold;
    & > ul{
        display:flex;
        & > li{
            padding:10px;
            white-space:nowrap;
        }
    }
`;
const img_style=css`
    width:40px;
    display:block;
`;
const IconContainer=styled.div`
    display:flex;
    align-items:center;
    & > span{
        padding:0 10px;
        color:#fff;
        font-weight:bold;
        font-size:22px;
        display:inline-block;
        white-space:nowrap;
       
    }
    & img{
        width:100%;
    }
    @media(max-width:764px){
        & > span{
            display:none;
        }
    }
`;
const discord_style=css`
position:relative;
width:30px;
z-index:2;
&:after{
    content:'';
    width:20px;
    height:20px;
    background:#fff;
    position: absolute;
    left:0;
    display:block;
    right:0;
    top:0;
    bottom:0;
    z-index:2;
}
`;
const icon_style=css`
    width:30px;
    background:#fff;
`;
const Navigation=()=>{
    const img_path='https://joe888777.github.io/ChlorellaGameStudio/';
    const home='/';
    const contact='/contact';
    const game='/game';
    const twitter_icon=img_path+'img/twitter.png';
    const discord_icon=img_path+'img/discord.png';
    const fb_icon=img_path+'img/facebook.png';
    const logo=img_path+'img/logo.png';
    return(
        <div css={css`background:#000;`}>
            <div css={style}>
                <Link href={home}>
                    <IconContainer className='logo' >
                        <div css={css`width:40px;`}>
                            <img src={logo} alt={'綠球藻遊戲工作室'} css={img_style} />
                        </div>
                        <span>綠球藻遊戲工作室</span>
                    </IconContainer>
                </Link>
                <nav css={nav_style}>
                    <ul>
                        <li><Link href={home}>首頁</Link></li>
                        <li><Link href={game}>遊戲</Link></li>
                        <li><Link href={contact}>聯絡我們</Link></li>
                        <li><a href="https://www.facebook.com/%E7%95%B0%E6%98%9F%E6%8E%A2%E7%B4%A2%E8%80%85-101549205438251" target="_blank" rel="noreferrer"><img src={fb_icon}css={icon_style} alt={`faecebook ChlorellaGame`}/></a></li>
                        <li><a href="https://discord.com/invite/Vm2hm8PYG7" target="_blank" rel="noreferrer"><img src={discord_icon} css={icon_style} alt={`discord ChlorellaGame`}/></a></li>
                        <li><a href="https://twitter.com/ChlorellaGame"target="_blank" rel="noreferrer"><img src={twitter_icon} css={icon_style} alt={`twitter ChlorellaGame`}/></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navigation;