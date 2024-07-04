import { FC, useState } from "react";
import { seatBox, seatContainer, selected } from "./seats.css"

type TSeats = {
    countPerson : number,
    limitPerson : number,
    setCountPerson : (countPerson : number) => void
}

const Seats : FC<TSeats> = (
    {countPerson, limitPerson,setCountPerson}) => {

    const seats = [1,2,3,4,5,6,7,8,9,10];
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

    const addSeat = (idx : number) : void  => {
            setSelectedSeats([...selectedSeats, idx])
            countPerson += 1;

    }
    const removeSeat = (idx : number) : void  => setSelectedSeats(selectedSeats.filter((seat) =>
        seat !== idx))
    const toggleSeat = (idx: number): void => {
        if (selectedSeats.includes(idx)) {
          removeSeat(idx);
        } else {
          addSeat(idx);
        }
      };

    const checkSelected = (idx : number) : boolean => {
        return selectedSeats.includes(idx);
    }

  return (
      <div className={seatContainer}> 
          {seats.map((seat,index) => (
            <div key = {index}
                onClick = {() => {
                  console.log(seat, index);
                  if(limitPerson > (countPerson/2) ){
                    toggleSeat(index)
                    setCountPerson(countPerson + 1)
                  } else {
                    alert("인원 수를 확인해주세요.")
                  }}
                  }
                className= {checkSelected(index) ? selected : seatBox}
            >
            {seat}
            </div>          
          ))}
      </div>
  )
}

export default Seats