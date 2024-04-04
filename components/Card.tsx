import Carousel from "@/components/Carousel ";

const Card = () => {
	return (
		<>
			<div className="card card-compact w-48 bg-base-100 shadow-xl">
				<div className="card-body">
					<p className="card-title text-xs">درصد چربی بدن</p>
					<p className="text-xs">
						نزدیکترین تصویر به بدن خود را انتخاب کنید.
					</p>
					<Carousel />
					<div className="card-actions justify-end">
						<button className="btn btn-outline btn-sm btn-info w-full">
							تایید و ادامه
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
