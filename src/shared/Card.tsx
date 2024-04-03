interface Props {
  pic?: string,
  url: string,
  title: string,
  children?: React.ReactNode
}

export function Card(props:Props) {
  return (
    <div className='relative flex gap-4 items-center'>
      {props.pic && <a href={props.url} target='_blank'>
        <img src={props.pic} alt={props.title} className='w-16 rounded-full' width='64' height='64' />
      </a>}
      <div className='leading-4'>
        <p>
          <a href={props.url} target='_blank'>{props.title}</a>
        </p>
        <p className='text-stone-400 text-sm'>
          {props.children}
        </p>
      </div>
    </div>
  )
}