import * as React from "react"
import Logo from 'Assets/img/logo.svg'

export default function Search() {
  return (
    <div className="Search">
      <img src={Logo} alt="Vitakit" width={100} />
      <h2>Поиск</h2>
    </div>
  )
}
