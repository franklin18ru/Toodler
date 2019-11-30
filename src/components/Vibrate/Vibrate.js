import React from 'react';
import { Vibration } from 'react-native';

const pattern = [
    1000,
    2000
]

const Vibrate = ({isRunning}) => {
    if (isRunning) { Vibration.vibrate(pattern,false); }
    else {Vibration.cancel();}
    return null;
};

export default Vibrate


