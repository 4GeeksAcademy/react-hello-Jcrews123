import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { BootstrapCard } from "./Bootstrapcards";
import Footer from "./Footer";
import ToggleButton from "./Changeviewbutton";

//create your first component
const Home = () => {
	const [isMobileView, setIsMobileView] = useState(false);

    const toggleView = () => {
        setIsMobileView(!isMobileView);
    };

	return (
	<div className={isMobileView ? "mobile-view" : ""}>
		<Navbar />
		<div className= "">
			<Jumbotron />
		</div>
		<ToggleButton onClick={toggleView} isMobileView={isMobileView} />
		<div className="d-flex flex-column align-items-center flex-md-row justify-content-between text-center">
			<BootstrapCard />
			<BootstrapCard />
			<BootstrapCard />
			<BootstrapCard />
		</div>
		<Footer />
</div>
	);
};

export default Home;
