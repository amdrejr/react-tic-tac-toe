import './styles/settings/colors.css'
import './styles/settings/fonts.css'
import './styles/generic/reset.css'
import './styles/elements/base.css'
import './styles/settings/size.css'
import './styles/settings/shadow.css'

import './App.css'

import Header from './components/Header'
import Board from './components/Board'
import ShowEvents from './components/ShowEvents'

function App() {

  return (
    <>
      <Header/>
      <Board/>
      <ShowEvents show={true}/>
    </>
  )
}

export default App
