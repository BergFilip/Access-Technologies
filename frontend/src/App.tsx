import Home from './sites/Home.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { Route, Routes } from "react-router-dom";
import TechDetail from "./sites/TechDetail";
import "./styles/sites/TechDetail.scss";

function App() {
  return (
      <div className="container">
          <main className="main-container">
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/technologie/:slug" element={<TechDetail />} />
              </Routes>
          </main>
          <Footer/>
      </div>
  )
}

export default App
