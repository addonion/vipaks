import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (

    <div className='container mx-auto'>
      <div className='px-2 py-6 flex gap-6 '>
        <Link to='/' className='[&.active]:text-sky-900'>
          Мой профиль
        </Link>{' '}
        <Link to='/team' className='[&.active]:text-sky-900'>
          Моя команда
        </Link>
      </div>
      <hr className='mb-6' />

      <QueryClientProvider client={queryClient}>
        <div className='px-2 pb-48'>
          <Outlet />
        </div>

        {/* <TanStackRouterDevtools /> */}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>

    </div>
  ),
})