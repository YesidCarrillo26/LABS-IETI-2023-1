import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, ChakraProvider, Flex, Input, useColorMode } from '@chakra-ui/react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  const {toggleColorMode } = useColorMode()

  return (
    <ChakraProvider>
      <Flex>
        {/* <Header></Header> */}
        <Input></Input>
        <Button onClick={toggleColorMode}></Button>
      </Flex>
    </ChakraProvider>
  )
}

export default App
