import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[0, 4, 8],
];

function Board() {
	const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
	const [winningMessage, setWinningMessage] = useState("");
	const [go, setGo] = useState("cross");
	const [winningCombo, setWinningCombo] = useState([]);
	const message = `Its now ${go}'s turn`;
	console.log(cells);

	const reset = () => {
		setCells(["", "", "", "", "", "", "", "", ""]);
		setWinningMessage("");
		setGo("cross");
		setWinningCombo([]);
	};

	useEffect(() => {
		let newWinningCombo = [];
		let circleWins = false;
		let crossWins = false;

		winningCombos.forEach((combo) => {
			const isCircleWin = combo.every((index) => cells[index] === "circle");
			const isCrossWin = combo.every((index) => cells[index] === "cross");

			if (isCircleWin) {
				circleWins = true;
				newWinningCombo = combo;
			} else if (isCrossWin) {
				crossWins = true;
				newWinningCombo = combo;
			}
		});

		if (circleWins) {
			setWinningMessage("Circle Wins");
			setWinningCombo(newWinningCombo);
		} else if (crossWins) {
			setWinningMessage("Cross Wins");
			setWinningCombo(newWinningCombo);
		} else {
			setWinningMessage("");
			setWinningCombo([]);
		}
	}, [cells]);
   
	useEffect(() => {
      
		return () => {};
	}, []);
	const classes = `md:w-[570px] w-[320px] md:h-[80px] h-[60px] m-[15px] mb-0 rounded-lg p-4 border-2 border-solid border-light text-light font-bold transition-all ${
		winningMessage ? "bg-accent" : "bg-primary"
	}`;

	return (
		<>
			<div
				className="board box-content  flex flex-wrap rounded-lg
            md:h-[600px] md:w-[600px]
            h-[330px] w-[330px]
            
            ">
				{cells.map((cell, index) => (
					<Cell
						id={index}
						key={index}
						cell={cell}
						cells={cells}
						setCells={setCells}
						go={go}
						setGo={setGo}
						winningMessage={winningMessage}
						isWinningCell={winningCombo.includes(index)}
					/>
				))}
			</div>
			<div className={classes}>
				<p className="text-center flex h-[100%] items-center justify-center">
					{winningMessage ? winningMessage : null || message}
				</p>
			</div>
			<div>
				<button
					className="md:w-[570px] w-[320px] flex items-center justify-center h-[60px] m-[15px] bg-red-700 rounded-md p-4 border-2 border-solid border-light text-light font-bold hover:bg-red-900 transition-all "
					onClick={reset}>
					Reset
				</button>
			</div>
		</>
	);
}

export default Board;
