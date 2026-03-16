import type { FC } from 'react'
import { StyleProvider } from '@ant-design/cssinjs'
import { Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { App, ConfigProvider } from 'antd'

export const RootLayout: FC = () => {
  return (
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
        </App>
      </ConfigProvider>
    </StyleProvider>
  )
}
