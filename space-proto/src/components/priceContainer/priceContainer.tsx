import { FC, useState } from 'react'
import PriceButton from './priceButton/priceButton';
import { controlBtn, numPerson, payBtn, paymentContainer, personContainer, personNumContainer, priceContainer, priceMark, totalPriceMark } from './priceContainer.css';

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

    return (
        <div className={paymentContainer}>
        <section className ={personContainer}>
            <h4>인원</h4>
            <p></p> 
            <div className = {personNumContainer}>
                <button 
                    onClick={minusLimitPerson}
                    className = {controlBtn}>-</button> 
                <div className = {numPerson}>{limitPerson}</div>
                <button 
                    onClick={plusLimitPerson}
                    className = {controlBtn}>+</button>
            </div>
            
        </section>
        <section className={priceContainer}>
            <h4 className = {priceMark}>Price    </h4>
            <div className = {totalPriceMark}>{price*limitPerson}</div>
            <div className={payBtn}>
                <PriceButton
                limitPerson = {limitPerson}
                countPerson = {countPerson} />
            </div>
        </section>
        </div>
    )
}

export default PriceContainer