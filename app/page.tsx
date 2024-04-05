import Card from "@/components/Card";

export default function Home() {
	return (
		<div>
			<div className="flex flex-col justify-center items-center h-screen">
				<div className="flex justify-center items-center gap-2">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
