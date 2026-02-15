import './Home.css';
import Hero from '../Hero/Hero';

import Impact from '../Impact/Impact';
import Initiatives from '../Initiatives/Initiatives';
import Cubes from '../Cubeanimation/Cubes';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <main className="home">
      <Hero />
      
      <Impact />
      
      <Initiatives />

      <section className="join-now">
        <div className="join-now__inner">Join Now</div>
      </section>

      <section className="home__cubes" aria-label="Interactive cubes">
        <div className="home__cubes-inner">
          <div className="home__cubes-copy">
            <h2 className="home__cubes-title">Interactive Cube Field</h2>
            <p className="home__cubes-text">
              Move your cursor or tap the grid to trigger the full Cubes-JS-CSS animation.
            </p>
          </div>
          <div className="home__cubes-stage">
            <Cubes
              gridSize={10}
              maxAngle={60}
              radius={6}
              cellGap={8}
              duration={{ enter: 0.2, leave: 0.4 }}
              borderStyle="1px solid rgba(255, 255, 255, 0.35)"
              faceColor="#050608"
              rippleOnClick
              autoAnimate
              rippleColor="#1ed760"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
