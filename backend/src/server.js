import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("Server start in 5001 PORT");
});

app.get("/api/tasks", (req, res) => {
  res.status(200).send("do sth");
});

app.post("/api/tasks", (req, res) => {
  res.status(201).json({ message: "Done" });
});

app.put("/api/tasks/:id", (req, res) => {
  res.status(200).json({ message: "Update successfully" });
});

app.delete("/api/tasks", (req, res) => {
  res.status(201).json({ message: "Delete successfully" });
});
