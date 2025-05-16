import { useTodoStore, type Todo } from '@/stores/todo'
import { useState, useEffect, useRef } from 'react'
import Button from '../Button'

export default function TodoItem({ todo }: { todo: Todo }) {
  //TodoItem({ todo }: { todo: Todo })
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.focus()
    }
  }, [isEditMode])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) return

    if (e.key === 'Enter') {
      updateTodo({ ...todo, title })
    }
    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  function handleCancel() {
    setIsEditMode(false)
    setTitle(todo.title)
  }
  return (
    <div className="flex gap-[10px]">
      {isEditMode ? (
        <>
          <input
            className="rounded-md border-1 border-gray-400"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <Button onClick={() => updateTodo({ ...todo, title })}>저장</Button>
          <Button
            onClick={handleCancel}
            color="secondary">
            취소
          </Button>
        </>
      ) : (
        <>
          <div>{todo.title}</div>
          <Button onClick={() => setIsEditMode(true)}>수정</Button>
          <Button
            onClick={() => deleteTodo(todo)}
            color="danger">
            삭제
          </Button>
        </>
      )}
    </div>
  )
}
