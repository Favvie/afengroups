import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Services from "./components/pages/Services/Services";
import Whitepaper from "./components/pages/Whitepaper/Whitepaper";
import Partners from "./components/pages/Partners/Partners";
import Contact from "./components/pages/Contact/Contact";
import Blog from "./components/pages/Blog/Blog";
import Team from "./components/pages/Team/Team";
import About from "./components/pages/About/About";
import Education from "./components/pages/Education/Education";
import RealEstate from "./components/pages/RealEstate/RealEstate";
import WhitepaperData from "./components/pages/WhitepaperData/WhitepaperData";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import DashboardLogin from "./components/pages/DashboardLogin/DashboardLogin";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/blog" exact component={Blog}/>
					<Route path="/team" exact component={Team}/>
					<Route path="/about" exact component={About}/>
					<Route path="/contact" exact component={Contact} />
					<Route path="/partners" exact component={Partners} />
					<Route path="/services" exact component={Services} />
					<Route path="/services/afen-education" exact component={Education} />
					<Route path="/services/real-estate" exact component={RealEstate} />
					<Route path="/whitepaper" exact component={Whitepaper} />
					<Route path="/whitepaperData" exact component={WhitepaperData} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/dashboardLogin" exact component={DashboardLogin} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
