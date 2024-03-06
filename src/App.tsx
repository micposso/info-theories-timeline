import { useState } from 'react'
import { Chrono } from "react-chrono";


const App = () => {
    const items = [
      {
        title: "circa 3200 BC",
        cardTitle: "Cuneiform Writing",
        url: "http://www.history.com",
        cardSubtitle: "Cuneiform Writing in Ancient Summeria",
        cardDetailedText:
          "Developed by the Sumerians, this is one of the earliest known systems of writing, marking a fundamental shift in the ability to store and transmit complex information.",
        media: {
          type: "IMAGE",
          source: {
            url: "/cunieform-summerians.jpg",
          },
        },
      },
    ];

    return (
      <div style={{ width: "500px", height: "400px" }}>
        <Chrono items={items} />
      </div>
    )
  }

export default App;
