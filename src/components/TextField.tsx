// import styles from './TextField.module.css'

export default function TextField({
  label,
  hint,
  value,
  onChange,
  deleteValue,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  deleteValue?: () => void
}) {
  return (
    <div>
      <label className="block">
        {label && <span>{label}</span>}
        <input
          className="w-[100%] border-2 border-gray-400"
          {...props}
          value={value}
          onChange={onChange}
        />
      </label>
      <button
        className="bg-red-500 text-white"
        onClick={deleteValue}>
        delete
      </button>
      {hint && <p>{hint}</p>}
    </div>
  )
}
