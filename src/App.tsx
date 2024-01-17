import './styles/generic/reset.css'
import './styles/settings/colors.css'
import './styles/settings/fonts.css'
import './styles/elements/base.css'
import './styles/settings/size.css'
import './styles/settings/shadow.css'

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Game from './pages/Game'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Game />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
