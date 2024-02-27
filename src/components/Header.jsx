import moneyImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={moneyImg} alt="Money bag with dollar sign logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
