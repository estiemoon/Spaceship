import { FC, useState } from "react";
import { seatBox, selected } from "./seats.css"

interface SeatsProps {
    countPerson : number
}

const Seats : FC<SeatsProps> = (
    {countPerson}) => {

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
    <div>
        {seats.map((seat,index) => (
            <div key = {index}
                onClick = {() => toggleSeat(index)}
                className= {checkSelected(index) ? selected : seatBox}
            >
                {seat}
            </div>
        ))}
    </div>
  )
}

export default Seats