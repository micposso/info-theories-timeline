import { Chrono } from "react-chrono";


const App = () => {
    const items = [ 
      {
        title: "Cuneiform Writing",
        cardTitle: "Circa 3200 BC Summeria",
        cardDetailedText:
          "Developed by the Sumerians, this is one of the earliest known systems of writing, marking a fundamental shift in the ability to store and transmit complex information.",
        media: {
          type: "IMAGE",
          source: {
            url: "/cunieform-summerians.jpg",
          },
        },
      },
      {
        title: "Hieroglyphics",
        cardTitle: "Circa 3200 BC Egypt",
        cardDetailedText:
          "The ancient Egyptians utilized this pictographic script for communication, embedding rich cultural narratives within their symbols.",
        media: {
          type: "IMAGE",
          source: {
            url: "/Hieroglyphics.png",
          },
        },
      },
      {
        title: "African Talking Drums",
        cardTitle: "Ancient Africa",
        cardDetailedText:
          "These drums communicated complex messages over long distances by mimicking the tones of human speech, showcasing early sophisticated auditory encoding systems outside the written paradigm.",
        media: {
          type: "IMAGE",
          source: {
            url: "/Hieroglyphics.png",
          },
        },
      },
      {
        title: "Hieroglyphics",
        cardTitle: "Circa 3200 BC Egypt",
        cardDetailedText:
          "The ancient Egyptians utilized this pictographic script for communication, embedding rich cultural narratives within their symbols.",
        media: {
          type: "IMAGE",
          source: {
            url: "/Hieroglyphics.png",
          },
        },
      },
      {
        title: "Hieroglyphics",
        cardTitle: "Circa 3200 BC Egypt",
        cardDetailedText:
          "The ancient Egyptians utilized this pictographic script for communication, embedding rich cultural narratives within their symbols.",
        media: {
          type: "IMAGE",
          source: {
            url: "/Hieroglyphics.png",
          },
        },
      },
      {
        title: "Hieroglyphics",
        cardTitle: "Circa 3200 BC Egypt",
        cardDetailedText:
          "The ancient Egyptians utilized this pictographic script for communication, embedding rich cultural narratives within their symbols.",
        media: {
          type: "IMAGE",
          source: {
            url: "/Hieroglyphics.png",
          },
        },
      },
      {
        title: "Hieroglyphics",
        cardTitle: "Circa 3200 BC Egypt",
        cardDetailedText:
          "The ancient Egyptians utilized this pictographic script for communication, embedding rich cultural narratives within their symbols.",
        media: {
          type: "IMAGE",
          source: {
            url: "/Hieroglyphics.png",
          },
        },
      },
    ];

    return (
      <div>
        <Chrono items={items} mode="HORIZONTAL" itemWidth={150} showSingle />{" "}
      </div>
    );
  }

export default App;
