import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NewsPage } from './pages/NewsPage'

export default function App() {
  return (
    <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
        </Switch>
    </Router>
  )
}