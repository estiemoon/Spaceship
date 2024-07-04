import { createGlobalTheme, globalStyle, style } from "@vanilla-extract/css";

globalStyle('body', {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'black',
    color: 'black',
    fontSize: '16px',
    lineHeight: '1.5',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
)

export const vars = createGlobalTheme(":root", 
    {
        color : {
            primary : "blue",
            secondary : "red"
        }

    }) 
export const seatContainer = style({
    backgroundImage : 'url("../../../sample1.png")',
    backgroundSize : 'cover',
    borderRadius : '10px',
    padding: '10px',
    margin: '10px',
    marginBottom: '30px',
    marginTop: '40px',

})

export const line = style({
    display: 'flex',
})

export const line_text = style({
    width : '50px',
    height : '50px',
    textAlign : 'center',
    paddingTop : '10px'
})