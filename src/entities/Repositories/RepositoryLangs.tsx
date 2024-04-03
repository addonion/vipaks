import { useQuery } from '@tanstack/react-query'
import { fetchRepositoryLangs } from './api'

export const RepositoryLangs = ({ url }: { url: string })  => {
  const { isPending, isError, data } = useQuery({
    queryKey: [url],
    queryFn: () => fetchRepositoryLangs(url),
    enabled: !!url,
  })

  if (isPending) return <div>Загрузка</div>
  if (isError) return <div>Ошибка загрузки</div>

  return (
    <>
      <br />
      Языки:
      {Object.keys(data).map(lang => <span key={lang}> {lang}</span>)}
    </>
  )
}