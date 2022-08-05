import LogoImg from 'Assets/img/logo.svg'
import HomeImg from 'Assets/img/home.svg'
import AppstoreImg from 'Assets/img/appstore.svg'
import GoogleplayImg from 'Assets/img/googleplay.svg'
import * as React from "react"
// import { Link } from "react-router-dom"

import "./Home.scss"

export default function Home() {
  return (
    <div className="Home">
      <img src={LogoImg} className={"logo"} alt="Vitakit" width={720} />
      <h2 className={"buy-greeting"}>Покупайте лекарства<br />по своим рецептам</h2>
      <img src={HomeImg} alt="" width={823} />
      <img src={AppstoreImg} alt="App Store" width={276} />
      <img src={GoogleplayImg} alt="Google Play" width={276} />
      <div className={"start-info"}>
        <span>Коснитесь экрана для того, чтобы начать</span>
        <span>или</span>
        <span>Приложите свой QR-код</span>
      </div>
    </div>
  )
}
