import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';

const Timer = ({estilo}) => {
  const settingsInfo = useContext(SettingsContext)

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('trabalho');
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function switchMode() {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
    setMode(nextMode);
    modeRef.current = nextMode;
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;

  }

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  }

  useEffect (() => {
    initTimer();

    const interval =  setInterval(() => {
      if (isPausedRef.current) {
        return;
      }

      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();

    }, 1000);

    return () => clearInterval(interval);
  },  [settingsInfo]);

  const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100) ;

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;


  return (
    <div>
      <CircularProgressbar value={percentage} text={minutes + ':' + seconds} styles={buildStyles({
        textColor: "var(--r7)",
        pathColor: mode === 'work' ? "var(--r10)" : "var(--r7)",
        trailColor: "var(--c5)",
      })} />
      <div style={{marginTop: '20px'}}>
        {isPaused ? 
        <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false;}} className={estilo.button} /> :
        <PauseButton onClick={() => {setIsPaused(true); isPausedRef.current = true;}} className={estilo.button} />}
        
        
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} className={estilo.button} />
      </div>
    </div>
  )
}

Timer.propTypes = {
  estilo: PropTypes.object.isRequired
}

export default Timer