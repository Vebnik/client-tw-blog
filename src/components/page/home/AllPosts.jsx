import React, {useMemo, useState} from 'react';
import {testPosts} from "../../utils/testPosts";
import {SimpleGrid, useBreakpointValue, useDisclosure} from "@chakra-ui/react";
import PostsModel from "./PostsModel";
import userService from '../../../service/userService'

const AllPosts = () => {

	const [posts, setPosts] = useState([]);
	const column = useBreakpointValue({ base: 1, md: 2})

	const getPosts = () => {
		userService.getPosts()
			.then(res => {
				console.log(res)
				setPosts(res.data)
			})
	}

	useMemo(() => getPosts(), posts)

	return (
		<SimpleGrid columns={column} spacing={5}>
			{posts.map((el, i) => <PostsModel getPosts={getPosts} config={el} key={i}/>)}
		</SimpleGrid>
	);
};

export default AllPosts;