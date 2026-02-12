import type { TaskItem } from '../types/task'

type TaskProps = {
  task: TaskItem
  onToggle: (id: number) => void
}

function Task({ task, onToggle }: TaskProps) {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
      </label>
    </li>
  )
}

export default Task
