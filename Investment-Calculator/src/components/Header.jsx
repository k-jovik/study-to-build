import investmetCalcIMG from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <>
      <div id="header">
        <img src={investmetCalcIMG} alt="investment-calculator" />
        <h1>Invsestment calculator</h1>
      </div>
    </>
  );
}
