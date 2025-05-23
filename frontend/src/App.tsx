import Home from './sites/Home.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { Route, Routes } from "react-router-dom";
import TechDetail from "./sites/TechDetail";

function App() {
  return (
      <div className="container">
          <Header/>
          <main className="main-container">
              <Routes>
                  <Route path="/Access-Technologies" element={<Home/>}/>
                  <Route path="/Access-Technologies/home" element={<Home/>}/>
                  <Route path="/Access-Technologies/technologie/:slug" element={<TechDetail />} />
              </Routes>
          </main>
          <Footer/>
      </div>
  )
}

export default App
