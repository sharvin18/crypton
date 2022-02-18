
import {Navbar, Footer, Services, Welcome, Transcations, Loader} from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transcations/>
      <Footer/>
    </div>
  )
}

export default App
