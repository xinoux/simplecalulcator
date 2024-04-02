import { useState } from "react";
import Buttonitems from "./button-item";
export default function Calculator() {
  const [value, setValue] = useState("");

  return (
    <section className="calculator-container">
      <div className="calculator">
        <div id="display.container">
          <input id="display" type="text" value={value} />
        </div>

        <section className="buttons">
          <div className="rowButtons" id="firstRow">
            <Buttonitems
              value="AC"
              clickHandler={(e) => {
                setValue("");
              }}
            />
            <Buttonitems
              value="DE"
              clickHandler={(e) => setValue(value.slice(0, -1))}
            />
            <Buttonitems
              value="."
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="operand"
              value="/"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="rowButtons">
            <Buttonitems
              identification="numbers"
              value="7"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="numbers"
              value="8"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="numbers"
              value="9"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="operand"
              value="*"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="rowButtons">
            <Buttonitems
              identification="numbers"
              value="4"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="numbers"
              value="5"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="numbers"
              value="6"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="operand"
              value="-"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="rowButtons">
            <Buttonitems
              identification="numbers"
              value="1"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="numbers"
              value="2"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="numbers"
              value="3"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="operand"
              value="+"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="rowButtons">
            <Buttonitems
              identification="numbers"
              value="00"
              clickHandler={(e) => setValue(value + e.target.value)}
            />
            <Buttonitems
              identification="numbers"
              value="0"
              clickHandler={(e) => setValue(value + e.target.value)}
            />

            <Buttonitems
              identification="equalbutton"
              value="="
              clickHandler={(e) => setValue((e) => setValue(eval(value)))}
            />
          </div>
        </section>
      </div>
    </section>
  );
}
