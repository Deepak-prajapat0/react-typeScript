import { ReactNode } from "react"

interface Props{
    children:ReactNode  // for getting any html tag or component
}

export default function Home({children}:Props) {
  return (
    <div>Home {children}</div>
  )
}
