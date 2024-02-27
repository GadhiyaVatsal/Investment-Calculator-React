

export default function Results({ userInput }) {
    return (
      <section id="results">
        <h2>Results</h2>
        <p>
          After {userInput.duration} years, your investment will be worth{" "}
          {calculateFutureValue(userInput).toFixed(2)}.
        </p>
      </section>
    );

}