import { createGlobalTheme, style } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", 
    {
        color : {
            primary : "blue",
            secondary : "red"
        }

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