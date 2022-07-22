import { useEffect, useState } from "react";

import Clock from "../Clock";
import Group from "./Group";
import Wrapper from "./Wrapper";

const Wallpaper: React.FC = () =>
{
    const [phase, setPhase] = useState(0);

    const PHASES = [
        [[90, 180], [180, 270], [0, 90], [270, 0]],
        [[135, 135], [225, 225], [45, 45], [315, -45]],
        [[315, -45], [45, 45], [225, 225], [135, 135]]
    ];

    useEffect(() =>
    {
        const timerID = setInterval(() => setPhase((phase + 1) % PHASES.length), 4000);
        return () => clearInterval(timerID);

    }, [phase, setPhase, PHASES]);

    return (
        <div>

            Phase: {phase}
            <Wrapper>
                {[...Array(108).keys()].map(i =>
                    <ClockGroup key={`group-${i}`} phases={PHASES} phase={phase} />
                )}
            </Wrapper>
        </div>
    );
}

const ClockGroup: React.FC<{ phases: number[][][], phase: number }> = ({ phases, phase }) => 
{
    return (
        <Group>
            {[...Array(4).keys()].map(i =>
                <Clock
                    key={`clock-${i}`}
                    delay={5}
                    p1={phases[phase][i][0]}
                    p2={phases[phase][i][1]}
                />
            )}
        </Group>
    );
}

export default Wallpaper;