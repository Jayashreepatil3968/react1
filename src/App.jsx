import React from 'react'
import JSON from "./course.json"
import Course from "./components/Course"
import IMG from "./nature img.jpg"
import Image from './components/Image'
import "./global.css"

const App = () => {
  return (
    <>
     <Course payload={JSON} />
    <Image data={IMG} />
    </>
  )
}

export default App;