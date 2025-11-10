import express from "express";
import taskRoute from "./routes/tasksRoutes.js";

const app = express();

app.use("/api/tasks", taskRoute);

app.listen(5001, () => {
  console.log("Server start in 5001 PORT");
});
