import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import items from "./data/data";
import { Chrono } from "react-chrono";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1" sx={{ margin: "20px" }}>
            Timeline of Information Technologies
          </Typography>
          <div style={{ width: "95%" }}>
            <Chrono
              items={items}
              mode="HORIZONTAL"
              showAllCardsHorizontal
              cardWidth={450}
              cardHeight={300}
              contentDetailsHeight={100}
              fontSizes={{
                title: "1rem",
              }}
              slideShow
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
