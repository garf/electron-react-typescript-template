import * as React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from './views/Home'
import Search from './views/Search'

export default function AppRoutes() {
  return (
    <div className="App">
      <nav>
        <Link to="search">Поиск</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  )
}
