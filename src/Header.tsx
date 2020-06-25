import React from "react"

interface Person {
  name: string
  age: number
}

export default ({name, age}: Person): JSX.Element => {

  return (
    <>
      <header>
        <h1>
          Welcome to the profile of {name}, who is {age}.
        </h1>
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
