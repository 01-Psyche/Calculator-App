import React from "react";
import { useState } from "react";
import * as math from "mathjs";
const log = console.log.bind(document);

export const Numbers = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  const handleClick = (e) => {
    const value = e.target.name;
    log(`Number ${e.target.name}`);
    setQuestion(question.concat(value));
    setAnswer(answer.concat(value));
  };

  const clear = () => {
    setQuestion("");
    setAnswer("");
  };

  const backspace = () => {
    log("Backspace");
    setAnswer(answer.slice(0, answer.length - 1));
    setQuestion(question.slice(0, -1));
  };

  const equalsTo = () => {
    try {
      setAnswer(math.evaluate(answer).toString());
    } catch (err) {
      setAnswer("NaN");
    }
  };
  return (
    <div className="allCalc">
      <form className="inputs">
        <input className="question" type="text" value={question} readOnly />
        <div className="ansAndBck">
          <input className="answer" type="text" value={answer} readOnly />
          <i onClick={backspace} className="fa-solid fa-delete-left"></i>
        </div>
      </form>
      <div className="numOperation">
        <div className="numbers">
          <button name="1" onClick={handleClick} className="one">
            1
          </button>
          <button name="2" onClick={handleClick} className="two">
            2
          </button>
          <button name="3" onClick={handleClick} className="three">
            3
          </button>
          <button name="4" onClick={handleClick} className="four">
            4
          </button>
          <button name="5" onClick={handleClick} className="five">
            5
          </button>
          <button name="6" onClick={handleClick} className="six">
            6
          </button>
          <button name="7" onClick={handleClick} className="seven">
            7
          </button>
          <button name="8" onClick={handleClick} className="eight">
            8
          </button>
          <button name="9" onClick={handleClick} className="nine">
            9
          </button>
          <button name="0" onClick={handleClick} className="zero">
            0
          </button>
          <button name="." onClick={handleClick} className="dot">
            .
          </button>
          <button onClick={clear} className="clear">
            <i className="fa-solid fa-eraser"></i>
          </button>
        </div>

        <div className="operations">
          <button name="/" onClick={handleClick} className="divide">
            <i className="fa-solid fa-divide"></i>
          </button>
          <button name="*" onClick={handleClick} className="multiply">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button name="+" onClick={handleClick} className="add">
            <i className="fa-solid fa-plus"></i>
          </button>
          <button name="-" onClick={handleClick} className="subtract">
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
      </div>
      <button onClick={equalsTo} className="equal">
        <i className="fa-solid fa-equals"></i>
      </button>
    </div>
  );
};
