import { useQuery } from '@tanstack/react-query'
import UserRepositoryLangs from './UserRepositoryLangs'
import { dateFormater } from '../../shared'

interface Repo {
  id: number,
  html_url: string,
  name: string,
  description: string,
  created_at: string,
  clone_url: string,
  languages_url: string
}

export function UserRepositories() {
  const { isPending, isError, data } = useQuery({ queryKey: ['repositories'], queryFn: fetchProfileRepos, staleTime: 1000000 })

  if (isPending) return <div>Загрузка</div>
  if (isError) return <div>Ошибка загрузки</div>

  return (
    <ul className='grid gap-4 leading-4'>
      {data.map((repo:Repo) => (
        <li key={repo.id} className='block border rounded px-3 py-2'>
          <a href={repo.html_url} target='_blank'>{repo.name}</a>

          <span className='text-stone-400 text-sm'>
            {repo.description && <><br />{repo.description}</>}
            <UserRepositoryLangs url={repo.languages_url} />

            <br />
            {dateFormater(repo.created_at)}

            <br />
            {repo.clone_url}
          </span>

        </li>
      ))}
    </ul>
  )
}

const fetchProfileRepos = async () => {
  const response = await fetch('https://api.github.com/users/addonion/repos')
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}
