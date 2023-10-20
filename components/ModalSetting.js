import React from "react";
import { FiX } from "react-icons/fi";
import {Button} from "@nextui-org/react";
function ModalSetting({
	pomodoroRef,
	shortBreakRef,
	longBreakRef,
	openSetting,
	setOpenSetting,
	updateTimeDefaultValue,
}) {
	const inputs = [
		{
			value: "Pomodoro",
			ref: pomodoroRef,
			defaultValue: 25,
		},
		{
			value: "Short Break",
			ref: shortBreakRef,
			defaultValue: 5,
		},
		{
			value: "Long Break",
			ref: longBreakRef,
			defaultValue: 10,
		},
	];

	return (
		<>
			<div
				className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
					openSetting ? "" : "hidden"
				}`}
				onClick={() => setOpenSetting(false)}
			></div>
			<div 
				className={`max-w-xl  bg-opacity-80 bg-gray-800 absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-md ${
					openSetting ? "" : "hidden"
				}`}
				style={{
					transform: "translate(-50%,-50%)",
				}}
			>
				<div className="text-white flex justify-between items-center">
					<h1 className="uppercase font-bold tracking-wider">Time setting</h1>
					<FiX
						className="text-2xl cursor-pointer "
						onClick={() => setOpenSetting(false)}
					/>
				</div>
				<div className="h-1 w-full text-white  bg-gray-400 mt-5 mb-5"></div>
				<div className="flex gap-5">
					{inputs.map((input, index) => {
						return (
							<div key={index}>
								<h1 className="text-white text-sm">{input.value}</h1>
								<input cl
									defaultValue={input.defaultValue}
									type="number"
									className="w-full bg-gray-400 bg-opacity-30 py-2 rounded outline-none text-center text-white"
									ref={input.ref}
								/>
							</div>
						);
					})}
				</div>
				<button
					className="rounded-full text-white bg-gray-800 py-2 my-3 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-gray-800 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
					onClick={updateTimeDefaultValue}
				>
					Save
				</button>
			</div>
		</>
	);
}

export default React.memo(ModalSetting);
