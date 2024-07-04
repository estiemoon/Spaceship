import { FC, useState } from 'react'
import PriceButton from './priceButton/priceButton';

type TPriceContainer = {
    limitPerson: number,
    countPerson: number,
    setLimitPerson: (limitPerson: number) => void
}

const PriceContainer : FC<TPriceContainer> = ({
    limitPerson,
    countPerson,
    setLimitPerson
}) => {
        
    const [price,setPrice] = useState(10000);

    const plusLimitPerson = () => {limitPerson == 20 ? null : setLimitPerson(limitPerson + 1)}
    const minusLimitPerson = () => {limitPerson == 0 ? null : setLimitPerson(limitPerson - 1)}

    return (<>
        <section>
            <h2>인원</h2>

            <span onClick={minusLimitPerson}>-</span> 
            <div>{limitPerson}</div>
            <span onClick={plusLimitPerson}>+</span>
        </section>
        <section>
            <h2>Price</h2>
            <div>{price*limitPerson}</div>
        </section>
        <PriceButton
            limitPerson = {limitPerson}
            countPerson = {countPerson} />
        </>
    )
}

export default PriceContainer