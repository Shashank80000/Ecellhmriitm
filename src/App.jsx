import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import CustomCursor from './Component/CustomCursor/CustomCursor'
import Cubes from './Component/Cubeanimation/Cubes'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Team from './Component/Team/Team'
import Startups from './Component/Startups/Startups'
import Events from './Component/Events/Events'
import Contact from './Component/Contact/Contact'

import Developers from './Component/Developers/Developers'

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="app">
        <div className="app__background" aria-hidden="true">
          <Cubes
            gridSize={12}
            maxAngle={55}
            radius={6}
            cellGap={6}
            duration={{ enter: 0.2, leave: 0.45 }}
            borderStyle="1px solid rgba(255, 255, 255, 0.25)"
            faceColor="#050608"
            rippleOnClick={false}
          />
        </div>
        <div className="app__content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
