import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'
import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
