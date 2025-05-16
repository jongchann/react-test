import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/movies', label: 'Movies' },
  { to: '/about', label: 'About' },
  { to: '/todos', label: 'Todos' }
]

export default function Header() {
  return (
    <header className="flex gap-[10px]">
      {navigations.map(
        navigation => (
          <NavLink
            to={navigation.to}
            className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
            {navigation.label}
          </NavLink>
        ),
        navigations
      )}
    </header>
  )
}
