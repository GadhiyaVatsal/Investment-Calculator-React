
export default function UserInput({ onChange, userInput }) {

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
              onChange("initialInvestment", event.target.value)
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
              onChange("annualInvestment", event.target.value)
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
              onChange("expectedReturn", event.target.value)
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
              onChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
