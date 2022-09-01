export const Dropdown = ({ elements, onChangeDropdown, label }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <br />
      <select onChange={(e) => onChangeDropdown(e.target.value)}>
        {elements.map((dropdownElement, index) => (
          <option key={index} value={dropdownElement.value}>
            {dropdownElement.name}
          </option>
        ))}
      </select>
    </div>
  );
};
