import React, {useContext, useMemo} from 'react';
import {ChakraProvider, extendTheme, useToast} from '@chakra-ui/react';
import StartPage from "./page/RegLogin/StartPage";
import HomePage from "./page/home/HomePage";
import {Context} from "../index";
import {observer} from 'mobx-react-lite'
import authService from "../service/authService";

const myTheme = extendTheme({
  styles: {
    global: (props) => ({
      'body, html': {
        background: props.colorMode === 'light' ? 'gray.900' : 'gray.900',
      },
      '::-webkit-scrollbar': {
        width: '0'
      }
    })
  },
  config: {
    initialColorMode: 'dark'
  }
})

const App = observer(() => {

  const { user } = useContext(Context)
  const toast = useToast()

  const checkAuth = () => {
    authService.checkSession()
      .then(async res => {

        if (!res.ok) {
          toast({
            title: 'Not valid session.',
            description: "Please login / register",
            status: 'error',
            duration: 2000,
            isClosable: false,
            position: 'top'
          })
          return null;
        }

        await user.setUser(res.data)
        await user.setIsAuth(true)
      })
  }; checkAuth()

  return (
    <ChakraProvider theme={myTheme}>
      {user.isAuth ? <HomePage/> : <StartPage/>}
    </ChakraProvider>
  );
})

export default App;
