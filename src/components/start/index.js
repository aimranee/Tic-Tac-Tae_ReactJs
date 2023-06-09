import React, { useContext } from "react";

import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className="start">
      <div className="card shadow-gray">
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
      </div>
      <div className="start__btns">
        <button className="btn btn-yellow" onClick={() => handleStart("cpu")}>
          Jouer avec l'ordinateur
        </button>
        <button className="btn btn-blue" onClick={() => handleStart("user")}>
          {" "}
          1 VS 1
        </button>
      </div>
    </div>
  );
};

export default Start;
