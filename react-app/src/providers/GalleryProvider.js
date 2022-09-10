import { createContext } from "react";

export const GalleryContext = createContext(null);

export const GalleryProvider = ({ children }) => {
  const user = {
    name: "John",
    lastname: "MacTavish",
  };

  // returns state that can be accessed by child components
  return (
    <GalleryContext.Provider value={user}>{children}</GalleryContext.Provider>
  );
};

/* <div> -- Parent Element
   everything inside is a children and can be accessed through -- > props.children
   <p>Child Element</p>
 </div>;*/
