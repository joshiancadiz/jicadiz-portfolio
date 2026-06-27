import { useState, useEffect } from 'react';
import { getPhilippinesTime } from '../../utils/time';

export const DigitalClock = () => {
    const [currentTime, setCurrentTime] = useState(getPhilippinesTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(getPhilippinesTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {currentTime}
        </>
    )
}

export default DigitalClock;