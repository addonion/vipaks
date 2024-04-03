import { createRootRoute, Outlet } from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Nav } from '@shared'

// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    },
  },
})

export const Route = createRootRoute({
  component: () => (

    <div className='container mx-auto'>
      <Nav />

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