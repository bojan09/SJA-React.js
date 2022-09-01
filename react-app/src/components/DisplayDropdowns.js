import { Dropdown } from "./Dropdown";
import { people } from "../MockData";
import { socials } from "../MockData";
import { useState } from "react";

export const DisplayDropdowns = () => {
  const [social, setSocial] = useState("");
  const [person, setPerson] = useState("");
  return (
    <>
      <Dropdown
        label="Choose Social"
        elements={socials}
        onChangeDropdown={setSocial}
      />
      <br />
      <Dropdown
        label="Choose Person"
        elements={people}
        onChangeDropdown={setPerson}
      />
      <br />
      <p>Selected social : {social}</p>
      <p>Selected person : {person}</p>
    </>
  );
};
