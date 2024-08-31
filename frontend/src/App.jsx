import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'

function App() {
  return (
    <div className='min-w-[100vw] min-h-[100vh] flex flex-col justify-evenly'>
      <Header />
      <main className='bg-gray-200'> <Outlet /> </main>
      <Footer />
    </div>
  )
}

export default App