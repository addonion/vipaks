import { useQuery } from '@tanstack/react-query'
import {RepositoryLangs} from '@entities'
import { dateFormater } from '@shared'
import { fetchUserRepositories } from './api'

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
  const { isPending, isError, data } = useQuery({ queryKey: ['repositories'], queryFn: fetchUserRepositories })

  if (isPending) return <div>Загрузка</div>
  if (isError) return <div>Ошибка загрузки</div>

  return (
    <ul className='grid gap-4 leading-4'>
      {data.map((repo:Repo) => (
        <li key={repo.id} className='block border rounded px-3 py-2'>
          <a href={repo.html_url} target='_blank'>{repo.name}</a>

          <span className='text-stone-400 text-sm'>
            {repo.description && <><br />{repo.description}</>}
            <RepositoryLangs url={repo.languages_url} />

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