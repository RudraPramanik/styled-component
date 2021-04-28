import React from 'react'
import styled,{css,keyframe} from 'styled-components'
import {setColor,setRem,setLatterSpacing,setBorder} from '../../styles'

const Banner = ({className,title,text,children,greeting}) => {
    return (
        <div className={className}>
            <h1>{greeting} <span>{title}</span></h1>
            <div className="ingo">
                <p>{text}</p>
                {children}
            </div>
        </div>
    )
}

const BannerWraper = styled(Banner)`
 background: rgba(0, 0, 0, 0.7);
 text-align: center;
 padding: ${setRem(60)} ${setRem(3)};
 ${setLatterSpacing(3)};
 color:${setColor.mainWhite};
 h1{
     text-transform:capitalize;
     font-size:${setRem(48)};
     color:${setColor.primaryColor}
 }
 p{
     width:85%;
     margin:0 auto;
 }
 @media(min-width:768px){
    width:70vw;
    /*setborder */
    ${setBorder({width:"6 px",color:setColor.primaryColor})}
    p{
        width785%;
    }
    h1{
        /* animation */
    }
    info{
        /* animation */
    }
 }
`

export default BannerWraper
