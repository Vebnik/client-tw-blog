import React, {useState} from 'react';
import {Container} from "@chakra-ui/react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const StartPage = () => {

	const [isLogin, setLogin] = useState(true)

	return (
		<Container color={'#f0e7db'} maxW={'1200px'} minW={'400px'}>
			{isLogin ? <LoginForm setLogin={setLogin}/> : <RegisterForm/>}
		</Container>
	);
};

export default StartPage;