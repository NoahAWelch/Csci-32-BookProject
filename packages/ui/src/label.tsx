export type LabelProps = {
  children: React.ReactNode
  htmlFor?: string
}
export function Label({ children, htmlFor }: LabelProps) {
  return (
    <label className="text-lg font-bold w-full my-1" htmlFor={htmlFor}>
      {children}
    </label>
  )
}
