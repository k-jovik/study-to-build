import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultsTable({ resultsProp }) {
  let result = calculateInvestmentResults(resultsProp);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((element, index) => {
          const totalInterest =
            element.valueEndOfYear -
            (resultsProp.initialInvestment +
              element.annualInvestment * element.year);

          const investedCapital =
            resultsProp.initialInvestment +
            element.annualInvestment * element.year;

          return (
            <tr key={index}>
              <td>{element.year}</td>
              <td>{formatter.format(element.valueEndOfYear)}</td>
              <td>{formatter.format(element.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
