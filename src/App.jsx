import Main from './components/main/Main.jsx'
import Nav from './components/nav/Nav.jsx'

function App() {
// use routes for main
  return (

    <div className='font-serif grid md:grid-cols-3'>
      <nav className=' md:col-span-1'>
        <Nav />
      </nav>
      <main className='md:col-span-2 bg-gray-300'>
        <Main />
      </main>
    </div>
  )
}

export default App
