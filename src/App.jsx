import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarPizzeria from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <>
      <NavbarPizzeria />
      {/*<Home />*/}
      {/*<Register />*/}
      <Login />
      <Footer />
    </>
  )
}

export default App
