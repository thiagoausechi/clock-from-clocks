import { useEffect, useState } from "react";
import { NUMBERS } from "../../digits/numbers";
import Digit from "../Digit";
import Wrapper from "./Wrapper";

const Sequence: React.FC = () => 
{
    const [date, setDate] = useState(new Date());

    useEffect(() =>
    {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timerID);

    }, [setDate]);

    const x: number = date.getSeconds() % 10;

    return (
        <Wrapper>
            {NUMBERS.map((_, index) => <Digit digit={index.toString()} />)}
            <Digit digit={x.toString()} />
        </Wrapper>
    );
}

export default Sequence;