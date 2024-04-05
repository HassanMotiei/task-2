"use client";

import React, { useState } from "react";

const Range = () => {
	const [value, setValue] = useState(25);

	const handleChange = (event: { target: { value: string; }; }) => {
		setValue(parseInt(event.target.value));
	};

	return (
		<div>
			<input
				type="range"
				min={0}
				max={100}
				value={value}
				onChange={handleChange}
				className="range range-xs range-info"
				step={25}
			/>
			<div className="w-full flex justify-between text-xs px-2">
				<span>50</span>
				<span>65</span>
				<span>80</span>
				<span>95</span>
				<span>110</span>
			</div>
		</div>
	);
};

export default Range;
