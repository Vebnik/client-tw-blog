import React, {useContext, useState} from 'react';
import {
	Badge,
	Box,
	Button,
	Code,
	Divider,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Text,
	useToast
} from "@chakra-ui/react";
import authService from "../../../service/authService";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const LoginForm = observer(({setLogin}) => {

	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const toast = useToast()
	const { user } = useContext(Context)

	const login = async () => {
		authService.login(email, pass)
			.then(async res => {
				setEmail(''); setPass('')

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

				await user.setUser(res.data?.user)
				await user.setIsAuth(true)
			})

	}

	return (
		<Box background={'gray.600'} width={'40%'} maxH={'max-content'} m={'auto'} my={50} p={2} rounded={5} shadow={5}>
			<FormControl color={'gray.300'} isRequired>
				<Input value={email} onChange={(ev) => setEmail(ev.target.value)} type={'text'} placeholder={'Email / Username'}/>
				<Input value={pass} onChange={(ev) => setPass(ev.target.value)} type={'password'} placeholder={'Password'} my={2}/>
				<Divider my={2}/>
				<Button onClick={login} mx={'25%'} borderColor={'gray.900'} _hover={{backgroundColor: 'gray.900'}} w={'50%'} variant={'outline'}>LogIn</Button>
				<FormHelperText>
					If you don't have an account, you can <Text as={'button'} color={'gray.200'} onClick={() => setLogin(prev => !prev)}>Register now</Text>
				</FormHelperText>
			</FormControl>
		</Box>
	);
});

export default LoginForm;