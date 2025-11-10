export function getAllTasks(req, res) {
  res.status(200).send("do nnnn sth");
}

export function createTask(req, res) {
  res.status(201).json({ message: "Done" });
}

export function updateTask(req, res) {
  res.status(200).json({ message: "Update successfully" });
}

export function deleteTask(req, res) {
  res.status(201).json({ message: "Delete successfully" });
}
