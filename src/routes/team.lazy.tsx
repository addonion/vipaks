import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/team')({
  component: Team,
})

function Team() {
  return (
    <>
      <h1>Моя команда</h1>
    </>
  )
}