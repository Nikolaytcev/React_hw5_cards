import './App.css'
import { Cards } from './Cards/Cards'
import { cardInfo } from './data/cardInfo'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Cards cards={cardInfo}/>
  )
}

export default App
