import { NUMBERS } from "../../digits/numbers";
import Clock from "../Clock";
import Wrapper from "./Wrapper";

const Digit: React.FC<{ digit: string }> = ({ digit }) => 
{
    const x = NUMBERS[+digit];
    return (
        <Wrapper>
            {x.map(_ => _.map(y => <Clock p1={y[0]} p2={y[1]} />))}
        </Wrapper>
    );
}

export default Digit;