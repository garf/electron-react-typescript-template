import * as React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="Home">
      <h2>Покупайте лекарства по своим рецептам</h2>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}
