import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";

//React Element
const heading = (
  <div>
    <h1>Namaste React</h1>
    <h2>Welcome to the world of React</h2>
  </div>
);

const HeadingComponent = () => {
  return (
    <div>
      <h1>This is Functional Component</h1>
    </div>
  );
};

const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Body/>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
