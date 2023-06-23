import {Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'

const App = () => <Route exact path="/" component={Home} />

export default App
