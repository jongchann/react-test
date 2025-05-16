import { useTodoStore } from '@/stores/todo'
import { useEffect } from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const fetchTodos = useTodoStore(state => state.fetchTodos)
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}></TodoItem>
      ))}
    </div>
  )
}
