import { StyleProvider } from '@ant-design/cssinjs'
import { Button, ConfigProvider } from 'antd'

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider theme={{ token: { colorPrimary: '#66E18B' } }}>
        <Button className="text-white" color="primary" variant="solid">Hello World</Button>
      </ConfigProvider>
    </StyleProvider>
  )
}

export default App
