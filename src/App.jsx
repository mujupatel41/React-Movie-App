import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/favorites' element={<Favorites />}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
