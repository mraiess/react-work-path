import Header from '../src/header/header'
import Nav from '../src/navigation/navigation'
import Footer from '../src/footer/footer'
import Details from '../src/content/details'
import General from '../src/content/general'
import Profile from '../src/content/general'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Profile />
      <Footer/>
    </div>
  )  
}

export default App;