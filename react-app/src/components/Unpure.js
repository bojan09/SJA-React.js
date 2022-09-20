export const Unpure = ({ number }) => {
  const result = number + Math.random() * 100;
  console.log("Unpure");
  return (
    <div>
      <p>Results : {result}</p>
    </div>
  );
};
