"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
	const navigate = useRouter().push;

	const navigateToChannels = () => navigate("/channels");

	return (
		<div className="">
			<h1>Welcome to Flow</h1>

			<section>
				<div>
					blah blah blah blah blah blah blah blah blah blah blah blah blah blah
					blah blah blah (this sectino is not completed yet)
				</div>

				<button onClick={navigateToChannels}>Go to (fake) Channels</button>
			</section>
		</div>
	);
};

export default HomePage;
