import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComponent from "./components/NavbarComponent"
import Photos from "./components/Photos"
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <NavbarComponent />
			{/* <Photos /> */}
			{/* <About /> */}
			<Contact />
    </>
  );
}

export default App;
