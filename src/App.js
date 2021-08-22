import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Services from "./components/pages/Services/Services";
import Whitepaper from "./components/pages/Whitepaper/Whitepaper";
import Partners from "./components/pages/Partners/Partners";
import Contact from "./components/pages/Contact/Contact";
import Blog from "./components/pages/Blog/Blog";
import Team from "./components/pages/Team/Team";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/blog" exact component={Blog}/>
					<Route path="/team" exact component={Team}/>
					<Route path="/contact" exact component={Contact} />
					<Route path="/partners" exact component={Partners} />
					<Route path="/services" exact component={Services} />
					<Route path="/whitepaper" exact component={Whitepaper} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
