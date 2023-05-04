import { useState, useReducer } from "react";
import { MainControls } from "./components/MainControls";
import { SmartHome } from "./components/SmartHome";
import { smartDevicesReducer } from "./reducers/smartDevicesReducer";
import { SmartHomeContext } from "./SmartHomeContext";

export function App() {
  const [firstLightOn, setFirstLightOn] = useState(false);
  const [secondLightOn, setSecondLightOn] = useState(false);
  const [thirdLightOn, setThirdLightOn] = useState(true);

  const handleAllOn = () => {
    setFirstLightOn(true);
    setSecondLightOn(true);
    setThirdLightOn(true);
  };

  const handleAllOff = () => {
    setFirstLightOn(false);
    setSecondLightOn(false);
    setThirdLightOn(false);
  };

  const [{ lights }, dispatch] = useReducer(smartDevicesReducer, {
    lights: [false, false, true],
  });

  return (
    <div>
      {/* <SmartHomeContext.Provider value={{lights: [firstLightOn, secondLightOn, thirdLightOn]}}> */}
      <SmartHomeContext.Provider value={{ lights, dispatch }}>
        <MainControls onAllOnClick={() => dispatch({ type: "allOn" })} onAllOffClick={() => dispatch({ type: "allOff" })} />
        <SmartHome
          // secondLightOn={secondLightOn}
          // thirdLightOn={thirdLightOn}
          // onFirstToggle={() => setFirstLightOn(!firstLightOn)}
          // onSecondToggle={() => setSecondLightOn(!secondLightOn)}
          // onThirdToggle={() => setThirdLightOn(!thirdLightOn)}
        />
      </SmartHomeContext.Provider>
    </div>
  );
}
