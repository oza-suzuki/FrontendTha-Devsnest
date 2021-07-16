import React from 'react';
import Card from "./Card";
import "./Chess.css";

function Chess() {
  var boxes = [];
  for (let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++){
        boxes.push({i,j});
    }
  }
//   console.log(boxes);
    return (
        <div className="Chess_container">
            <div className="Chess_border">
                <div className="board">
                    {
                    boxes.map((item) => {
                        return (<Card row={item.i} col={item.j} />)
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Chess;