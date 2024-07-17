import React, { useState, useRef } from 'react';
import './stopwatch.css';
import Button from '../button';
import ItemListing from '../ItemListing';
import { timeFormatter } from '../utils/timeFormatter';
import Card from '../card';
import { iconBank } from '../../iconbank';

const StopWatch = () => {

    const [currentState, setCurrentState] = useState('');
    const [currentTime, setCurrentTime] = useState(0);
    const [items, setItems] = useState([]);

    const intervalRef = useRef();

    const onStart = () => {
        if (currentState === 'RUNNING') return;
        setCurrentState('RUNNING');
        intervalRef.current = setInterval(() => {
            setCurrentTime((currentTime) => currentTime + 50)
        }, 50);
    }

    const onStop = () => {
        if (currentState === 'STOPPED') return;
        setCurrentState('STOPPED');
        setItems(() => [timeFormatter({ currentTime, returnType: 'string' }), ...items]);
        setCurrentTime(0);
        clearInterval(intervalRef.current);
    }


    const onPause = () => {
        if (currentState === 'PAUSED') return;
        setCurrentState('PAUSED');
        clearInterval(intervalRef.current);
    };

    const onReset = () => {
        /** if current State is not reset then update thr state and clear history data and ref */
        if (currentState === 'RESET') return;
        setCurrentState('RESET')
        setCurrentTime(0);
        clearInterval(intervalRef.current);
        setItems([]);
    }
    const { hours, minutes, seconds, milliSeconds } = timeFormatter({ currentTime });

    return (
        <Card
            headerTitle={'Stopwatch'}
            icon={iconBank['stopwatch']}
        >
            <div className="stopwatch">
                <div className="stopwatch__timestamp">
                    <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>:<span>{milliSeconds}</span>
                </div>
                <div className="stopwatch__actions">
                    <Button
                        onClick={currentState === 'RUNNING' ? onPause : onStart}
                        title={currentState === 'RUNNING' ? 'Pause' : 'Start'}
                    />
                    <Button onClick={onStop} title={'Stop'} />
                    <Button onClick={onReset} title={'Reset'} />
                </div>
                <div className="stopwatch__history">
                    <ItemListing
                        title={'History'}
                        list={items}
                        actionTitle={'Clear'}
                        onClick={() => setItems([])}
                    />
                </div>
            </div>
        </Card>

    )
}
export default StopWatch;