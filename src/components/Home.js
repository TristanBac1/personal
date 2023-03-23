import moon from "../img/moon.png";
import cat from "../img/cat.gif";
import land from "../img/land.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  return (
    <div class="home">
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        ></ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.5}>
          <h2>Test 3</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2}>
          <h2>Welcome to my Site!</h2>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.9, end: 2.5 }}>
          <img src={cat} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
