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

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id={id}
      />
      {name === "password" && (
        <button onMouseDown={mouseDown} onMouseUp={mouseUp}>
          <i className={iconType}></i>
        </button>
      )}
    </>
  );
};
