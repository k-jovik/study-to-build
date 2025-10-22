

export default function UserInput({ onChangeInput }) {
  const inputs1 = [
    { label: "Initial investment", name: "initialInvestment" },
    { label: "Annual Investment", name: "annualInvestment" },
    { label: "Expected Return", name: "expectedReturn" },
    { label: "Duration", name: "duration" },
  ];

  return (
    <>
      <div id="user-input">
        {inputs1.map((element, index) => (
          <div key={index}>
            {element.label}
            <input type="text" name={element.name} onChange={onChangeInput} />
          </div>
        ))}
      </div>
    </>
  );
}
