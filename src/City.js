import React from "react";

export default function City(props) {
  function showFarehrenheit(event) {
    event.preventDefault();
    let fTemp = Math.round(props.temperature * (9 / 5) + 32);
    alert(fTemp + "°F");
  }
  return (
    <div className="City">
      It is {props.temperature}°C |{" "}
      <a href="/" onClick={showFarehrenheit}>
        {" "}
        °F{" "}
      </a>{" "}
      in {props.name}
    </div>
  );
}
