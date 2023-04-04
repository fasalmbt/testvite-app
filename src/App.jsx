import './index.css'
import Header from './components/Header'
import NavSec from './components/NavSec'
import EventSec from './components/EventSec'
import CalendSec from './components/CalendSec'
import OptionSec from './components/OptionSec'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="flex items-center">
        <NavSec className="flex-1" />
        <EventSec className="flex-1" />
        <CalendSec className="flex-1" />
      </div>
      <OptionSec />
    </div>
  )
}

export default App
