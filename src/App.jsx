
import Navbar from './components/Navbar'
import './App.css'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div class="min-h-[87vh]">
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App
