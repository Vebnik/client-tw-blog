import React, {useContext, useState} from 'react';
import {Box, Button, Divider, FormControl, FormHelperText, FormLabel, Input, useToast} from "@chakra-ui/react";
import authService from "../../../service/authService";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const RegisterForm = observer(() => {

	const { user } = useContext(Context)
	const toast = useToast()
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')

	const register = async () => {
		authService.registration(email, pass)
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
				<FormLabel>Email</FormLabel>
				<Input value={email} type={'email'} onChange={(ev) => setEmail(ev.target.value)}/>
				<FormHelperText>Never share your email.</FormHelperText>
				<FormLabel>Password</FormLabel>
				<Input  value={pass} type={'password'} onChange={(ev) => setPass(ev.target.value)}/>
				<FormHelperText>Never share your Password.</FormHelperText>
				<Divider my={2}/>
				<Button onClick={register} mx={'25%'} borderColor={'gray.900'} _hover={{backgroundColor: 'gray.900'}} w={'50%'} variant={'outline'}>Register</Button>
			</FormControl>
		</Box>
	);
});

export default RegisterForm;