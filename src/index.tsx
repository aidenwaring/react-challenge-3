import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import AboutMe from "./AboutMe"
import FavouriteFoods from "./FavouriteFoods"
import ContactMe from "./ContactMe"

import "./index.css"

ReactDOM.render(
  <div>
    <Header />
    <AboutMe />
    <FavouriteFoods />
    <ContactMe />
  </div>,
  document.getElementById("root")
)
