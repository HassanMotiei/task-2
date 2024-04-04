
const Range = () => {
  return (
		<div>
			<input
				type="range"
				min={0}
				max="100"
				value="25"
				className="range range-xs range-info"
				step="25"
			/>
			<div className="w-full flex justify-between text-xs px-2">
				<span>0</span>
				<span>25</span>
				<span>50</span>
				<span>75</span>
				<span>100</span>
			</div>
		</div>
  );
}

export default Range
