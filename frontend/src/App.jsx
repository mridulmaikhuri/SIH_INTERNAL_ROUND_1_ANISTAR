import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'

function App() {

  return (
    <div className='border border-black w-screen h-screen'>
      <Header />
      <main> <Outlet /> </main>
      <Footer />
    </div>
  )
}

export default App
