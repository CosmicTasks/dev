import ReactSlider from 'react-slider';
import style from './Slider.module.css'
import { useContext } from 'react';
import SettingsContext from './SettingsContext'
import BackButton from './BackButton';


function Settings(){
    const settingsInfo = useContext(SettingsContext);
    return (
        <div  style={{textAlign:"left"}}>
            <label>Tempo de concentração: {settingsInfo.workMinutes}:00</label>
            <ReactSlider  
            className={style.slider}
            thumbClassName={style.thumb}
            trackClassName={style.track}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
            <label>Tempo de descanso: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider  
            className={style.sliderGreen}
            thumbClassName={style.thumb}
            trackClassName={style.track}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />

            <div style={{textAlign:'center', marginTop:'20px'}}>
            <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
           
        </div>
    )
}

export default Settings;