import { useState } from 'react'
import './App.css'
import AppHeader from './Components/header.jsx'
import Addingredients from './Components/MainPage.jsx'
import ChefCloudFooter from './Components/footer.jsx'
// import AiRecipe from './Components/AiChef.jsx'

function App() {
  return (
    <>
    <AppHeader/>
    <Addingredients/>
    <ChefCloudFooter/>
    </>
  )
}

export default App
