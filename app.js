const express = require("express");
const mockData = require("./mockData");
const cors = require("cors");
const app = express();
const routes = require("./routes");

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send(mockData.show);
});

app.listen(8000, () => {
  console.log("app started on port 8000");
});
