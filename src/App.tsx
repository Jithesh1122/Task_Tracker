import { useEffect, useState, type FormEvent } from 'react'
import TaskList from './components/TaskList'
import type { TaskItem } from './types/task'

const initialTasks: TaskItem[] = [
  { id: 1, title: 'Jogging at 5AM', completed: false },
  { id: 2, title: 'Go to Gym', completed: false },
]

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks)
  const [newTask, setNewTask] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedValue = newTask.trim()
    if (!trimmedValue) {
      return
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: trimmedValue,
        completed: false,
      },
    ])
    setNewTask('')
  }

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  useEffect(() => {
    console.log('Tasks changed:', tasks)
  }, [tasks])

  useEffect(() => {
    console.log('Dark mode changed:', darkMode)
  }, [darkMode])

  return (
    <main className={`app ${darkMode ? 'dark' : 'light'}`}>
      <section className="card">
        <div className="header">
          <h1>Task Tracker</h1>
          <button type="button" onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        <form className="task-form" onSubmit={addTask}>
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>

        <TaskList tasks={tasks} onToggleTask={toggleTask} />
      </section>
    </main>
  )
}

export default App
