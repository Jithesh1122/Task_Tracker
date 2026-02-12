import Task from './Task'
import type { TaskItem } from '../types/task'

type TaskListProps = {
  tasks: TaskItem[]
  onToggleTask: (id: number) => void
}

function TaskList({ tasks, onToggleTask }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet. Add your first task.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggleTask} />
      ))}
    </ul>
  )
}

export default TaskList
