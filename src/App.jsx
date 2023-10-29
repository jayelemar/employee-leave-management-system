import './App.css'
import { Footer, Header, Main, Sidebar } from './layout'


function App() {


  return (
    <>
      <Header/>
      <Main/>
      <section className='flex'>
        <div>Calendar</div>
        <Sidebar/>
      </section>
      <Footer/>
    </>
  )
}

export default App
