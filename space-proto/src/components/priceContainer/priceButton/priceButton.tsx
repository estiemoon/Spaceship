import { FC } from 'react'

type TPriceButton = {
    limitPerson: number,
    countPerson: number
}

const PriceButton : FC<TPriceButton> = ({
    limitPerson,
    countPerson
}) => {

    const isCorrectNumPerson = () => {
        if(countPerson/2 === limitPerson) {
            alert('결제 완료')
        } else {
            alert('모두 선택되지 않았습니다.')
        }
    }
  return (
    <button onClick={isCorrectNumPerson}>결제하기</button>
  )
}

export default PriceButton