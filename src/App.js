import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./App.css"
import NavbarComponent from "./components/NavbarComponent"
import Photos from "./components/Photos"
import About from './components/About'
import Contact from './components/Contact'
// import Photo from './components/Photo'

function App() {
  return (
    <BrowserRouter>
		  <NavbarComponent />
			<Switch>
				<Route exact path="/">
					<Photos />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
			{/* <Photo /> */}
    </BrowserRouter>
  );
}

export default App;
