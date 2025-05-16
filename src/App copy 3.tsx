import A1 from './components/A1'
import { useColorStore } from './stores/color'

export default function App() {
  const color = useColorStore(state => state.color)
  const setColor = useColorStore(state => state.setColor)
  return (
    <>
      <h1
        style={{ color }}
        onClick={() => setColor('blue')}>
        APP: {color}
      </h1>
      <A1></A1>
    </>
  )
}
