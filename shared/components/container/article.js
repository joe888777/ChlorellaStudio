import {css} from '@emotion/react';


const p_style=css`
     font-size:24px;
    font-weight: bold;
    padding:20px 0;
`;

 const Article=({content})=>{
    return(
        <p css={p_style}>
            {content}
        </p>
    )
}
export default Article;