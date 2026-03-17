import type { FC } from 'react'
import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { App, ConfigProvider } from 'antd'
import { queryClient } from '@/api/react-query'

export const RootLayout: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyleProvider layer>
        <ConfigProvider theme={{ token: { colorPrimary: '#66E18B' } }}>
          <App>
            <div className="p-2 flex gap-2">
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>
              <Link to="/about" className="[&.active]:font-bold">
                About
              </Link>
            </div>
            <Outlet />
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
          </App>
        </ConfigProvider>
      </StyleProvider>
    </QueryClientProvider>
  )
}
