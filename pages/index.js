import React, { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Alarm from "../components/Alarm";
import ModalSetting from "../components/ModalSetting";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Quicksand&display=swap');
</style>
export default function index() {
	const [pomodoro, setPomodoro] = useState(25);
	const [shortBreak, setShortBreak] = useState(5);
	const [longBreak, setLongBreak] = useState(10);
	const [seconds, setSecond] = useState(0);
	const [stage, setStage] = useState(0);
	const [consumedSecond, setConsumedSecond] = useState(0);
	const [ticking, setTicking] = useState(false);
	const [isTimeUp, setIsTimeUp] = useState(false);
	const [openSetting, setOpenSetting] = useState(false);
	
	const alarmRef = useRef();
	const pomodoroRef = useRef();
	const shortBreakRef = useRef();
	const longBreakRef = useRef();

	const updateTimeDefaultValue = () => {
		setPomodoro(pomodoroRef.current.value);
		setShortBreak(shortBreakRef.current.value);
		setLongBreak(longBreakRef.current.value);
		setOpenSetting(false);
		setSecond(0);
		setConsumedSecond(0);
	};

	const switchStage = (index) => {
		const isYes =
			consumedSecond && stage !== index
				? confirm("Are you sure you want to switch?")
				: false;
		if (isYes) {
			reset();
			setStage(index);
		} else if (!consumedSecond) {
			setStage(index);
		}
	};

	const getTickingTime = () => {
		const timeStage = {
			0: pomodoro,
			1: shortBreak,
			2: longBreak,
		};
		return timeStage[stage];
	};
	const updateMinute = () => {
		const updateStage = {
			0: setPomodoro,
			1: setShortBreak,
			2: setLongBreak,
		};
		return updateStage[stage];
	};

	const reset = () => {
		setConsumedSecond(0);
		setTicking(false);
		setSecond(0);
		updateTimeDefaultValue();
	};

	const timeUp = () => {
		reset();
		setIsTimeUp(true);
		alarmRef.current.play();
	};

	const clockTicking = () => {
		const minutes = getTickingTime();
		const setMinutes = updateMinute();

		if (minutes === 0 && seconds === 0) {
			timeUp();
		} else if (seconds === 0) {
			setMinutes((minute) => minute - 1);
			setSecond(59);
		} else {
			setSecond((second) => second - 1);
		}
	};
	const muteAlarm = () => {
		alarmRef.current.pause();
		alarmRef.current.currentTime = 0;
	};

	const startTimer = () => {
		setIsTimeUp(false);
		muteAlarm();
		setTicking((ticking) => !ticking);
	};

	useEffect(() => {
		window.onbeforeunload = () => {
			return consumedSecond ? "Show waring" : null;
		};

		const timer = setInterval(() => {
			if (ticking) {
				setConsumedSecond((value) => value + 1);
				clockTicking();
			}
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [seconds, pomodoro, shortBreak, longBreak, ticking]);

	return (
		<main className='min-h-screen font-light flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('/bgimg.jpg')" }}>
		<div className="h-[900px] w-[1100px] bg-slate-400 backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-2xl p-6">
			<div className=" text-white max-w-5xl  mx-auto">
			
				<Navigation setOpenSetting={setOpenSetting} />
				<Timer
					stage={stage}
					switchStage={switchStage}
					getTickingTime={getTickingTime}
					seconds={seconds}
					ticking={ticking}
					startTimer={startTimer}
					muteAlarm={muteAlarm}
					isTimeUp={isTimeUp}
					reset={reset}
					
				/>
				<About />
				<Alarm ref={alarmRef} />
				<ModalSetting
					openSetting={openSetting}
					setOpenSetting={setOpenSetting}
					pomodoroRef={pomodoroRef}
					shortBreakRef={shortBreakRef}
					longBreakRef={longBreakRef}
					updateTimeDefaultValue={updateTimeDefaultValue}
				/>
			</div>
		</div>
		</main>
	);
}
