import { useContext, useReducer } from "react";
import { smartDevicesReducer } from "../reducers/smartDevicesReducer.js";
import { SmartHomeContext } from "../SmartHomeContext.js";

export function Light(props) {
  // const { id, isOn, onToggle } = props;
  const { id } = props;
  const { lights, dispatch } = useContext(SmartHomeContext)
  const isOn = lights[id]

  const handleOnToggle = () => {
    dispatch({ type: "toggle", payload: id });
  };
  
  return (
    <button
      data-testid={`light-${id}`}
      id={id}
      style={{
        border: "solid 1px gray",
        padding: "2rem",
        fontSize: "3rem",
        background: isOn ? "#eee" : "#444",
      }}
      // onClick={onToggle}
      onClick={handleOnToggle}
    >
      {isOn ? "💡" : "⚫️"}
    </button>
  );
}
