import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (
    <div>
        <h1>Namaste React</h1>
        <h2>Welcome to the world of React</h2>
    </div>
)

const HeadingComponent = () =>{
    return (
        <div>
            <h1>This is Functional Component</h1>
        </div>
    )
}

const AppComponent = () => {
    return (
        <div>
            {HeadingComponent()} {/* same as <HeadingComponent /> */}
            {heading}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
