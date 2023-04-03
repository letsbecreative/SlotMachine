import React from "react";
import SlotM from "./SlotMac";

const App = () => {
    return <>
        <h1 className="heading_style">
         🎰 Welcome to {" "}
         <span style={{ fontWeight : "bold "}}> Slot Machine Game </span> 🎰 
        </h1>
        <div className="slotmachine">
            <SlotM x="😄" y="😄" z="😄"/>
            <hr />
            <SlotM x="😄" y="😁" z="😄"/>
            <hr />
            <SlotM x="🥶" y="😄" z="👽"/>
            <hr />
            <SlotM x="👻" y="👻" z="👻"/>
            <hr />
        </div>
    </>
};

export default App;