import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import fantasyNight from "../Images/fantasy_night.jfif";
import fantasySky from "../Images/fantasy_sky.jfif";
import fantasyCave from "../Images/fantasy_cave.jfif";

const Home = () => {
  const [currentScene, setCurrentScene] = useState(fantasyNight);

  return (
    <div>
      <div className="h-screen flex">
        <Pannellum
          width="100%"
          height="100%"
          image={currentScene}
          yaw={300}
          hfov={110}
          autoLoad
          autoRotate={-5}
          compass={true}
          showZoomCtrl={false}
          mouseZoom={false}
        >
          <Pannellum.Hotspot
            type="custom"
            pitch={-10}
            yaw={-120}
            handleClick={(evt, name) =>
              setCurrentScene(
                currentScene !== fantasyNight ? fantasyNight : fantasyCave
              )
            }
          />
        </Pannellum>
      </div>
    </div>
  );
};
export default Home;
