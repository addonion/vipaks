import { createLazyFileRoute } from '@tanstack/react-router'
import { UserInfo, UserRepositories } from '@entities'
import { UserFollowing } from '@entities'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {

  return (
    <>
      <h1>Мой профиль</h1>
      <UserInfo />

      <h2 className='mt-6'>Список репозиториев:</h2>
      <UserRepositories />

      <h2 className='mt-6'>Список подписок:</h2>
      <UserFollowing />
    </>
  )
}