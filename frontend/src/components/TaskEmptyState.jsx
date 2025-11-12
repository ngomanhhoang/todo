import React from "react";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";

function TaskEmptyState(filter) {
  return (
    <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
      <div className="space-y-3">
        <Circle className="mx-auto size-12 text-muted-foreground" />
        <div>
          <h3 className="font-medium text-foreground">
            {filter === "active"
              ? "No tasks are being done yet"
              : filter === "completed"
              ? "No tasks completed yet"
              : "No tasks yet"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {filter === "all"
              ? "Add task to start"
              : `
                Move to "all" to see the task ${
                  filter === "active" ? "done" : "in progress"
                }
            `}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default TaskEmptyState;
