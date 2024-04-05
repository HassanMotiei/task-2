import EmblaCarousel from "@/components/carousel/js/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "@/components/carousel/css/embla.css";
import Range from "./Range";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Card = () => {
	return (
		<>
			<div className="card card-compact w-48 bg-base-100 shadow-xl">
				<div className="card-body">
					<p className="card-title text-xs" dir="rtl">
						درصد چربی بدن
					</p>
					<p className="text-xs" dir="rtl">
						نزدیکترین تصویر به بدن خود را انتخاب کنید.
					</p>
					<EmblaCarousel slides={SLIDES} options={OPTIONS} />
					<div className="flex justify-center">
						<input
							type="checkbox"
							// defaultChecked
							className="checkbox checkbox-info"
						/>
					</div>
					<Range />
					<div className="card-actions justify-end">
						<button className="btn btn-outline btn-sm btn-info w-full mt-5">
							تایید و ادامه
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
