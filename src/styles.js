
export const setColor = {
    primaryColor: "#af9a7d",
    mainWhite: "#fff",
    mainBlack: "#222",
    mainGray: "#ececec",
    lightGrey: "#f7f7f7"
}

export const setFont = {
    main: "font-family: 'Lato', sans-serif",
    slanted: "font-family: 'Ubuntu', sans-serif"
}

export const setFlex = ({
    x,
    y
}) => {
    return `  display:flex;
  align-items:${y};
  justify-content:${x}; 
`
}

export const setBackground = ({
    img = "https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    color = "rgba(0,0,0,0)"
} = {}) => {
    return `
background:linear-gradient(${color},${color}),url(${img}) center / cover fixed no-repeat;
`
}

export const setRem = (number= 16)=>{
    return `${number/16}rem`
}
export const setLatterSpacing = (number= 2) =>{
    return `letter-spacing:${number}px`
}

export const setBorder = ( {width="2px", style="solid", color="black"}={})=>{
    return`border: ${width} ${style} ${color}`
}