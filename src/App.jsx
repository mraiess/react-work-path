import Header from './header/header'
import Nav from './navigation/navigation'
import Footer from './footer/footer'
import Profile from './content/profile'

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