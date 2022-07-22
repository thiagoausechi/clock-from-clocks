import { useEffect } from "react";
import { useState } from "react";

import Wrapper from "./Wrapper";
import Digit from "../Digit";

const ClockFromClocks: React.FC = () => 
{
    const [date, setDate] = useState(new Date());

    useEffect(() =>
    {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timerID);

    }, [setDate]);

    const [h1, h2] = date.getHours().toString().padStart(2, "0");
    const [m1, m2] = date.getMinutes().toString().padStart(2, "0");
    const [s1, s2] = date.getSeconds().toString().padStart(2, "0");
    const time = [h1, h2, m1, m2, s1, s2];


    return <>
        {date.toTimeString()}
        <Wrapper>
            {time.map(dig => <Digit digit={dig} />)}
        </Wrapper>
    </>;
}

export default ClockFromClocks;