import { useTodoStore } from '@/stores/todo'
import Button from '../Button'
import { useState } from 'react'

export default function TodoCreator() {
  const title = useTodoStore(state => state.title)
  const setTitle = useTodoStore(state => state.setTitle)
  const createTodo = useTodoStore(state => state.createTodo)
  const [loading, setLoading] = useState(false)

  async function handleCreateTodo() {
    if (loading) return

    setLoading(true)
    await createTodo()
    setLoading(false)
  }

  return (
    <div className="flex items-center gap-2">
      <input
        className="h-[30px] rounded-md border-1 border-gray-400 px-2"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            handleCreateTodo()
          }
        }}></input>

      <Button
        onClick={handleCreateTodo}
        loading={loading}>
        추가
      </Button>
    </div>
  )
}
