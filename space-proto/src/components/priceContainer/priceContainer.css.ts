import { style } from "@vanilla-extract/css";

export const paymentContainer = style({
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    
});

export const personContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '30px',
    paddingTop: '30px',
    paddingRight: '50px',
    paddingLeft: '50px',
    marginBottom: '20px',
    backgroundColor: 'lightgray',
    borderRadius: '10px'

});

export const personNumContainer = style({
    display: 'inline-flex'
});

export const numPerson = style({
    width: '50px',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px'
});

export const controlBtn = style({
    backgroundColor: 'pink',
    paddingRight: '15px',
    paddingLeft: '15px',
    paddingTop: '5px',
    paddingBottom: '5px'

})

export const priceContainer = style({
    backgroundColor: 'pink',
    display: 'flex',
    borderRadius: '10px',
    
})

export const priceMark = style({
    padding : '10px'

})
export const totalPriceMark = style({
    padding : '10px',
    fontSize: '20px'
})

export const payBtn = style({
    margin: '10px',

})


