export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  id,
  mouseDown,
  mouseUp,
  // ќе има се друго што не е дефинирано
  ...restProps
}) => {
  const iconType = type === "password" ? "fa fa-eye-slash" : "fa fa-eye";

  const shouldDisplayTextArea = () => {
    return name === "comment" && value && value.length > 8;
  };

  return (
    <>
      {shouldDisplayTextArea ? (
        <textarea
          name={name}
          id={id}
          cols="22"
          rows="3"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          id={id}
        />
      )}
      {name === "password" && (
        <button onMouseDown={mouseDown} onMouseUp={mouseUp}>
          <i className={iconType}></i>
        </button>
      )}
    </>
  );
};
