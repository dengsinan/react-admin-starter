import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

// eslint-disable-next-line react-refresh/only-export-components
function About() {
  return <div className="p-2">Hello from About!</div>
}
