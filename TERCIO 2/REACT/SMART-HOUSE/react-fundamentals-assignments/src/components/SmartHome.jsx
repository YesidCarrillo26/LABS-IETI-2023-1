import { useContext } from "react";
import { SmartHomeContext } from "../SmartHomeContext.js";
import { Light } from "./Light";

export function SmartHome() {
  const { lights } = useContext(SmartHomeContext);
  // const {
  //   // firstLightOn,
  //   // secondLightOn,
  //   // thirdLightOn,
  //   onFirstToggle,
  //   onSecondToggle,
  //   onThirdToggle,
  // } = props;
  return (
    <section
      style={{
        fontSize: "5rem",
        display: "grid",
        gridTemplateColumns: "min-content min-content",
        gap: "3px",
        alignItems: "center",
        paddingTop: "1rem",
      }}
    >
      {/* <Light id={0} isOn={firstLightOn} onToggle={onFirstToggle} />
      <Light id={1} isOn={secondLightOn} onToggle={onSecondToggle} />
      <Light id={2} isOn={thirdLightOn} onToggle={onThirdToggle} /> */}
      {/* <Light id={0} />
      <Light id={1}/>
      <Light id={2}/> */}
      <Light id={0} isOn={lights[0]} />
      <Light id={1} isOn={lights[1]} />
      <Light id={2} isOn={lights[2]} />
    </section>
  );
}
