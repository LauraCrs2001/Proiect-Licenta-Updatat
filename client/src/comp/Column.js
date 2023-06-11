import React from "react";
import continut from "./home/continuthome"

function Column() {
    return (
        <div className="col-8">
            {continut.map((item) => (
                <div className="galerie" key={item.id}>
                    <img src={item.img}></img>
                </div>
          ))}
        </div>
    );
}

export default Column;