import { useState } from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComponent from "./components/NavbarComponent"
import Photos from "./components/Photos"
import About from './components/About'
import Contact from './components/Contact'
import Photo from './components/Photo'

function App() {
	const [page, setPage] = useState('Home');

  return (
    <>
      <NavbarComponent setPage={setPage} />
			{/* {page === 'Home' && <Photos />}
			{page === 'About Us' && <About />}
			{page === 'Contact Us' && <Contact />} */}
			<Photo />
    </>
  );
}

export default App;
