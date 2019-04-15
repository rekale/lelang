import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from 'unify-react-mobile/build/NavBar'
import DaftarLelang from './Pages/DaftarLelang'
import DetailLelang from './Pages/DetailLelang'

const Routes = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/daftar-lelang/">daftar lelang</Link>
        </li>
        <li>
          <Link to="/detail-lelang/">detail lelang</Link>
        </li>
      </ul>
    </nav>
    <Route path="/" exact component={() => <div>homepage</div>} />
    <Route path="/daftar-lelang/" component={DaftarLelang} />
    <Route path="/detail-lelang/" component={DetailLelang} />
  </Router>
)

export default Routes