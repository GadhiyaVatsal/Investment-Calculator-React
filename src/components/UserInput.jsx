import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <lable>Initial Investment</lable>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleUserInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <lable>Annual Investment</lable>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleUserInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <lable>Expected Return</lable>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleUserInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <lable>Duration</lable>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleUserInput("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
