import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Form from './Components/Form'
import LastReview from './Components/LastReviews'
import Footer from './Components/Footer'
import StepsToWalker from './Components/StepsToWalker'
import { fetchBreeds } from "./ApiServices"

function App() {
  // fetchBreeds().then((response) => console.log(response))

  return (
   <div className='container'>
      <nav>
      <Navigation />
      </nav>
      <Form />
      <LastReview />
      <StepsToWalker />
      <Footer />
    </div>
  )
}
export default App
