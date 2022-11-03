import React from "react";
import "./title.css";

export default function TitleFunc(props) {
  let width = `width-` + props.width;
  const topTitleColor = `topText` + props.topTitleColor;
  const bottomTitleColor = "bottomText" + props.bottomTitleColor;
  return (
    <div className={"titleFunc " + width}>
      <div className="top-title d-flex justify-content-space-evenly align-items-center">
        <div className="line">
          <div className={"line-inner " + topTitleColor}></div>
        </div>
        <div className={"text"}>
          <p className={topTitleColor}>{props.topText}</p>
        </div>
      </div>

      <h1>{props.mainText}</h1>
      <div className="bottom-title">
        <p className={bottomTitleColor}>{props.bottomText}</p>
      </div>
    </div>
  );
}
