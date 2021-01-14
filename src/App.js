import { useEffect, useReducer, useRef, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Score from "./components/Score";
import TargetSkill from "./components/TargetSkill";
import Skills from "./components/Skills";
import ProgressBar from "./components/ProgressBar";
import Button from "./components/Button";

import { SKILLS, ENERGIES, GAME_DURATION, CAST_KEY, ENERGIES_KEYS } from "./constants";
import { reducer, initialState } from "./reducer";

import InvokeSound from "./assets/sounds/invoke.mpeg";
import './App.css';

function App() {
  const textContainer = useRef(null);

  const [gameRunning, setGameRunning] = useState(false);
  const [energyList, setEnergyList] = useState([]);
  const [castedSkill, setCastedSkill] = useState();
  const [targetSkill, setTargetSkill] = useState();
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(GAME_DURATION);
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Handles onKeyDown event
   */
  const keyDownHandler = ({ keyCode }) => {
    isValidEnergyKey(keyCode) && updateEnergies(keyCode);

    if(keyCode === CAST_KEY) {
      const currentEnergies = energyList.join('');
      for(let i = 0; i < SKILLS.length; i++) {
        if(SKILLS[i].combo.includes(currentEnergies)) {
          setCastedSkill(SKILLS[i]);
          assertSkill(i);
          playSound(SKILLS[i].sound);

          // This workaround is to reset Skill text animation
          textContainer.current.classList.remove('skill-text-animation');
          setTimeout(() => {
            textContainer.current.classList.add('skill-text-animation');
          });
        }
      }
    }
  };

  /**
   * returns true if keyCode is Q || W || E
   * @param {String} keyCode 
   */
  const isValidEnergyKey = (keyCode) => ENERGIES_KEYS.includes(keyCode);

  /**
   * Update energy list introduced by keyboard
   * @param {Number} keyCode 
   */
  const updateEnergies = (keyCode) => {
    const updatedEnergyArray = [...energyList];
    if(updatedEnergyArray.length >= 3) {
      updatedEnergyArray.pop();
    }
    updatedEnergyArray.unshift(keyCode);

    setEnergyList(updatedEnergyArray);
  };

  /**
   * Plays invoke and skill sounds
   * @param {String} sound 
   */
  const playSound = sound => {
    let invoke = new Audio(InvokeSound);
    invoke.volume = 0.2;

    let audio = new Audio(sound);
    audio.volume = 0.5;

    audio.play();
    invoke.play();
  };

  /**
   * Starts the game, set a random target skill, and game duration
   */
  const gameStart = () => {
    // The following line let onKeyDown works
    document.getElementsByClassName("App")[0].focus();

    randomizeTargetSkill();
    setGameRunning(true);
    setSecondsRemaining(GAME_DURATION);
  };

  /**
   * Set a target skill from SKILL constant using a random index
   */
  const randomizeTargetSkill = () => {
    setTargetSkill(SKILLS[Math.floor(Math.random() * SKILLS.length)]);
  };

  /**
   * Assert casted skill is equal to skill target
   * @param {Number} skillIndex 
   */
  const assertSkill = (skillIndex) => {
    if(gameRunning && SKILLS[skillIndex].combo === targetSkill.combo) {
      dispatch({type: 'incrementScore'});
      randomizeTargetSkill();
    }
  };

  /**
   * Handles game when its running, score, lastScore and secondsRemaining
   */
  useEffect(() => {
    if(!gameRunning) return;

    if(secondsRemaining <= 0) {
      setGameRunning(false);
      dispatch({type: 'setLastScore'});
      dispatch({type: 'clearScore'});
      return;
    };
     // Calculates progress bar width
      setProgressBarWidth(Math.ceil((secondsRemaining/ GAME_DURATION) * 100));

      const intervalId = setInterval(() => {
          setSecondsRemaining(secondsRemaining - 1);
      }, 1000);

      return () => clearInterval(intervalId);
  }, [secondsRemaining, gameRunning]);

  return (
    <div className="App" onKeyDown={keyDownHandler} tabIndex="0">
      <Header />
      {
        gameRunning ? (
          <div>
            <ProgressBar width={progressBarWidth} />
          </div>
        ) : (
          <Button text="START GAME" onClick={gameStart} />
        )
      }

      {/* Render Score component */}
      <Score score={state.score} lastScore={state.lastScore} />

      {/* Render TargetSkill component only when game is running */}
      {gameRunning && <TargetSkill skillName={targetSkill.name} />}

      {/* Render Skill casted */}
      <div ref={textContainer} className="skill-display">
        {castedSkill?.name}
      </div>

      <Skills
        quasBg={ENERGIES[energyList[0]]?.image}
        wexBg={ENERGIES[energyList[1]]?.image}
        exportBg={ENERGIES[energyList[2]]?.image}
      />
      <Footer />
    </div>
  );
}

export default App;
