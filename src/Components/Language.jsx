import React from "react";
import clsx from "clsx";

export default function Language({ props,index,wrongGuessCount }) {
  let styles = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  };

  return (
    <>
      <span
        className={clsx("chip ",  {lost: index < wrongGuessCount })}
        style={styles}
      >
        {props.name}
      </span>
    </>
  );
}
