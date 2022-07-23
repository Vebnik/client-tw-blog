import React, {useState} from 'react';
import {Box, Center, Container, Wrap} from "@chakra-ui/react";
import Header from "./Header";
import AllPosts from "./AllPosts";

const HomePage = () => {

	const [page, setPage] = useState(<AllPosts/>)

	return (
		<Container color={'#f0e7db'} maxW={'1200px'} minW={'400px'}>
			<Header setPage={setPage}/>
			<Wrap my={'20px'}/>
			<Center marginBottom={10}>
				{page}
			</Center>
		</Container>
	);
};

export default HomePage;