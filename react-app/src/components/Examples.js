import { useState } from "react";

export const Examples = () => {
  const addNewDayOff = () => {
    setDaysOff([...daysOff, newDay]);
    setNewDay("");
  };

  // Example 1
  const [car, setCar] = useState({
    model: "Tesla",
    year: 2021,
    km: 10000,
  });

  const printObject = (object) => {
    return <pre>{JSON.stringify(object, null, 2)}</pre>;
  };

  const changeKm = (km) => {
    setCar({
      ...car,
      km: 9999,
    });
  };

  const setBackKm = (km) => {
    setCar({
      ...car,
      km: 10000,
    });
  };

  //   Example 2

  const [daysOff, setDaysOff] = useState(["Saturaday", "Sunday"]);
  const [newDay, setNewDay] = useState("");

  return (
    <div>
      <hr />
      <h2>Example #1</h2>
      {printObject(car)}

      <button onClick={(object) => changeKm(object)}>Change KM</button>
      <button onClick={(object) => setBackKm(object)}>Change Back KM</button>
      <hr />
      <h2>Example #2</h2>
      <input
        type="text"
        value={newDay}
        onChange={(e) => setNewDay(e.target.value)}
      />

      <button onClick={addNewDayOff}>Add day off</button>

      {daysOff.map((day, i) => (
        <li key={i}>{day}</li>
      ))}
    </div>
  );
};
