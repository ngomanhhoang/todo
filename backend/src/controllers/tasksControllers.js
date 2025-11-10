import Task from "../models/Task.js";

export async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error when calling getAllTask: ", error);
    res.status(500).json({ message: "system error" });
  }
}

export async function createTask(req, res) {
  try {
    const { title } = req.body;
    const task = new Task({ title });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error when calling createTask: ", error);
    res.status(500).json({ message: "system error" });
  }
}

export async function updateTask(req, res) {
  try {
    const { title, status, completedAt } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        status,
        completedAt,
      },
      { new: true }
    );

    if (!updateTask) {
      return res.status(404).json({ message: "Not exist" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error when calling updateTask: ", error);
    res.status(500).json({ message: "system error" });
  }
}

export async function deleteTask(req, res) {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);

    if (!deleteTask) {
      return res.status(404).json({ message: "Not exist" });
    }
    res.status(200).json(deleteTask);
  } catch (error) {
    console.error("Error when calling deleteTask: ", error);
    res.status(500).json({ message: "system error" });
  }
}
