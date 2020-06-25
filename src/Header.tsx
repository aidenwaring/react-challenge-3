import React from "react"

export default (): JSX.Element => {
  let name: string = "Aiden"
  
  return (
    <>
      <header>
        <h1>Welcome To The Profile of {name}</h1>
        <nav>
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#fav-foods">Favourite Foods</a>
            </li>
            <li>
              <a href="#contact">Contact Details</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
