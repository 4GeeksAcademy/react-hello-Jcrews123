import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { BootstrapCard } from "./Bootstrapcards";

//create your first component
const Home = () => {
	return (
<div className="">
		<Navbar />
		<div className= "">
		<Jumbotron />
		</div>
		<div className="d-flex flex-column align-items-center flex-md-row justify-content-between text-center">
		<BootstrapCard />
		<BootstrapCard />
		<BootstrapCard />
		<BootstrapCard />
		</div>
		
</div>
	);
};

export default Home;
