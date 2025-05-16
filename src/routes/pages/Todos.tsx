import TodoCreator from '@/components/todos/TodoCreator'
import TodoList from '@/components/todos/TodoList'
import { Link } from 'react-router'

export default function Todos() {
  return (
    <>
      <Link to={'/'}>Main</Link>
      <TodoCreator />
      <TodoList />
    </>
  )
}
