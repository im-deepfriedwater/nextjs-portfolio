import useTimer from "@/utils/useTimer";
import { useState } from "react";


interface TickerProps {
    msgs: JSX.Element[];
    delay: number;
}

const Ticker = ({msgs, delay}: TickerProps) => {
    const [index, setIndex] = useState(0);
    useTimer(() => {
        if (index + 1 >= msgs.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }, delay);
    return (
        <label>{msgs[index]}</label>
    );
};

export default Ticker;