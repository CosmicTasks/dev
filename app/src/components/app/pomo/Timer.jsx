import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';

const Timer = ({estilo}) => {
  return (
    <div>
      <CircularProgressbar value={44} text={`${46}%`} styles={buildStyles({
        textColor: "var(--r7)",
        pathColor: "var(--r7)",
        trailColor: "var(--c5)",
      })} />
      <div style={{marginTop: '20px'}}>
        <PlayButton className={estilo.button} />
        <PauseButton className={estilo.button} />
        <SettingsButton className={estilo.button} />
      </div>
    </div>
  )
}

Timer.propTypes = {
  estilo: PropTypes.object.isRequired
}

export default Timer