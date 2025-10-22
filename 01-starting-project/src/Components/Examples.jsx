import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(value) {
    setSelectedTopic(value);
    console.log(selectedTopic);
  }
  let tabContent = <p>Please select a button.</p>;
  if (selectedTopic) {
    tabContent = (
      <div>
        <h2> {EXAMPLES[selectedTopic].title} </h2>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="examples" id="examples">
        <Tabs
          //   buttonsContainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
                label="Components"
              />
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
                label="JSX"
              />
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
                label="Props"
              />
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
                label="State"
              />
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
      <h2>Time to get started!</h2>
    </>
  );
}
