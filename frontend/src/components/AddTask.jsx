import React, { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/axios";

function AddTask({ handleNewTaskAdded }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  async function addTask() {
    if (newTaskTitle.trim()) {
      try {
        await api.post("/tasks", {
          title: newTaskTitle,
        });
        toast.success(`Task ${newTaskTitle} has been added.`);
        handleNewTaskAdded();
      } catch (error) {
        console.error("Error when adding task", error);
        toast.error("Error when adding task");
      }

      setNewTaskTitle("");
    } else {
      toast.error("You have to enter content of the task");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="What to do ?"
          className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <Button
          variant="gradient"
          size="xl"
          className="px-6"
          onClick={addTask}
          disabled={!newTaskTitle.trim()}
        >
          <Plus className="size-5" />
        </Button>
      </div>
    </Card>
  );
}

export default AddTask;
