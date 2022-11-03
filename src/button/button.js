import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css";

export default function Btn(props) {
  const btnColor = "btn" + props.color;
  const width = props.width;

  return (
    <Button className={"btnFunc " + btnColor + " " + "width"}>
      {props.text}
    </Button>
  );
}
