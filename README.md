# Task Tracker (React + Vite)

A simple task tracker built with React hooks and Vite. It lets you add tasks, mark them as complete, and switch between light and dark mode. It also logs state changes so you can see how the app reacts as you interact with it.

## Features
- Add tasks dynamically
- Mark tasks as completed
- Conditional styling for completed tasks
- Dark mode toggle
- State change logging with `useEffect`
- Component-based structure

## Project Structure
- `src/App.tsx` App shell and state management
- `src/components/Task.tsx` Single task item UI
- `src/components/TaskList.tsx` Task list rendering and empty state
- `src/types/task.ts` Task type definition
- `src/style.css` App styling

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Notes
- Task completion is stored in local state (not persisted).
- Dark mode is also stored in local state.

## Why this project
This project is a clean example of how to build a small React app using hooks and reusable components. It keeps the structure simple while still showing real, practical patterns.
