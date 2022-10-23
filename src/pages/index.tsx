import type { NextPage } from "next";

import { Button } from "../components/Button";

const Home: NextPage = () => {
	return (
		<div className="text-3xl text-green-600 p-2">
			Hello Geeks!
			<Button size="small" color="accent" onClick={console.log}>
				Click Me!
			</Button>
		</div>
	);
};

export default Home;
