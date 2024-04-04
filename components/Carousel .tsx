import Range from "@/components/Range";

const Carousel = () => {
	return (
		<>
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<img src="/body-1.png" className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide4"
							className="btn btn-ghost btn-sm btn-circle btn-ghost-right hover:bg-transparent"
						>
							❮
						</a>
						<a
							href="#slide2"
							className="btn btn-ghost btn-sm btn-circle btn-ghost-left hover:bg-transparent"
						>
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src="/body-2.png" className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide1"
							className="btn btn-ghost btn-sm btn-circle btn-ghost-right hover:bg-transparent"
						>
							❮
						</a>
						<a
							href="#slide3"
							className="btn btn-ghost btn-sm btn-circle btn-ghost-left hover:bg-transparent"
						>
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img src="/body-3.png" className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide2"
							className="btn btn-ghost btn-sm btn-circle btn-ghost-right hover:bg-transparent"
						>
							❮
						</a>
						<a
							href="#slide4"
							className="btn btn-ghost btn-sm btn-circle btn-ghost-left hover:bg-transparent"
						>
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img src="/body-4.png" className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide3"
							className="btn btn-ghost btn-sm btn-circle btn-ghost-right hover:bg-transparent"
						>
							❮
						</a>
						<a
							href="#slide1"
							className="btn btn-ghost btn-sm btn-circle btn-ghost-left hover:bg-transparent"
						>
							❯
						</a>
					</div>
				</div>
			</div>
			<div className="flex justify-center">
				<input type="checkbox" defaultChecked className="checkbox" />
			</div>
			<Range />

			<div className="flex justify-center w-full py-2 gap-2">
				<a href="#item1" className="btn btn-xs">
					1
				</a>
				<a href="#item2" className="btn btn-xs">
					2
				</a>
				<a href="#item3" className="btn btn-xs">
					3
				</a>
				<a href="#item4" className="btn btn-xs">
					4
				</a>
			</div>
		</>
	);
};

export default Carousel;
