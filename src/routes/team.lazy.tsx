import { createLazyFileRoute } from '@tanstack/react-router'
import { UsersList, UserTeam } from '@entities'


export const Route = createLazyFileRoute('/team')({
  component: Team,
})

function Team() {
  return (
    <div>
        <div>
          <h1>Моя команда</h1>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          <UserTeam />
          <UsersList />
        </div>
    </div>
  )
}