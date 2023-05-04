export const smartDevicesReducer = (state, action) => {
  switch (action.type) {
    // TODO: Other action types
    case "allOn":
      return {
        ...state,
        lights: state.lights.map((light)=>
          // action.payload === light ? !light : light
          true
        ),
      };
    case "allOff":
      return {
        ...state,
        lights: state.lights.map((light)=>
        // action.payload === !light ? light : !light
        false
        ),
      };
    case "toggle":
      return {
        ...state,
        lights: state.lights.map((light, index) =>
          // action.payload.index === index ? light : !light
          index === action.payload ? !light : light
        ),
      };
    default:
      return state;
  }
  // return state;
};
