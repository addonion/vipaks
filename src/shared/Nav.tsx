import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <>
      <div className='px-2 py-6 flex gap-6 '>
        <Link to='/' className='[&.active]:text-sky-900'>
          Мой профиль
        </Link>
        <Link to='/team' className='[&.active]:text-sky-900'>
          Моя команда
        </Link>
      </div>
      <hr className='mb-6' />
    </>
  )
}