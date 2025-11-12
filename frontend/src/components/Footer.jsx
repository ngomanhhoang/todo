import React from "react";

function Footer({ completedTasksCount = 0, activeTasksCount = 0 }) {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                🎉 Awesome ! You have done {completedTasksCount} tasks
                {activeTasksCount > 0 && `, still ${activeTasksCount} tasks`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Let's get started {activeTasksCount} tasks!</>
            )}
          </p>
        </div>
      )}
    </>
  );
}

export default Footer;
