import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

function About() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const defaultContent =
    "The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.";

  const customStyles = {
    
    
  };

  return (
    <div className="w-11/12 mx-auto mt-36 text-white p-5">
      <div>
        <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
        >
      <AccordionItem key="1" className="border-b-4 text-xl border-gray-800 " aria-label="Accordion 1" title="What is Pomodoro Technique?">
        {defaultContent}
      </AccordionItem>

    </Accordion>
      </div>
    </div>
  );
}

export default React.memo(About);