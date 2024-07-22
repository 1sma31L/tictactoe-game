/* eslint-disable react/prop-types */
import { useState } from "react";
import Cross from "../assets/cross.png";
import Circle from "../assets/circle.png";

function Cell({
	cell,
	cells,
	setCells,
	id,
	go,
	setGo,
	winningMessage,
	isWinningCell,
}) {
	const [isHovered, setIsHovered] = useState(false);

	const handleCellChange = (cellToChange) => {
		let copyCells = [...cells];
		copyCells[id] = cellToChange;
		setCells(copyCells);
	};

	const handleClick = () => {
		if (winningMessage) return;
		const taken = !!cells[id];
		if (!taken) {
			if (go == "circle") {
				handleCellChange("circle");
				setGo("cross");
			} else if (go == "cross") {
				handleCellChange("cross");
				setGo("circle");
			}
		}
	};

	const handleMouseEnter = () => {
		if (!cells[id]) {
			setIsHovered(true);
		}
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const classes = `flex justify-center items-center  border-light border-2 border-solid rounded-lg transition-all
	   md:w-[170px] md:h-[170px] md:m-[15px] 
		w-[100px] h-[100px] m-[5px]
	
	${
		!isWinningCell && winningMessage
			? "bg-primary"
			: cells[id] !== ""
			? isWinningCell
				? "bg-accent"
				: "bg-primary"
			: "bg-secondary"
	}  ${
		isHovered && !cells[id] && !winningMessage
			? "hover:bg-accent cursor-pointer "
			: ""
	}`;
	return (
		<div
			className={classes}
			onClick={() => handleClick()}
			id={id}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className={`${cell} text-light flex justify-center items-center `}>
				{cell ? (
					cell === "circle" ? (
						<img
							src={Circle}
							className="w-[50px]"
							alt="O"
							style={isWinningCell ? { filter: "brightness(0) invert(1)" } : {}}
						/>
					) : (
						<img
							src={Cross}
							className="w-[50px]"
							alt="X"
							style={isWinningCell ? { filter: "brightness(0) invert(1)" } : {}}
						/>
					)
				) : null}
			</div>
		</div>
	);
}

export default Cell;
