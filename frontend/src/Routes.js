import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DaftarLelang from './Pages/DaftarLelang'
import DetailLelang from './Pages/DetailLelang'

const Routes = () => (
  <Router>
    <Route path="/" exact component={() => <div>homepage</div>} />
    <Route path="/daftar-lelang/" component={DaftarLelang} />
    <Route path="/detail-lelang/" component={DetailLelang} />
  </Router>
)

export default Routes