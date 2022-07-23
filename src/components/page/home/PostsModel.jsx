import React, {useContext} from 'react';
import {Badge, Box, Divider, Heading, Image, Text, useDisclosure, useToast, Wrap} from "@chakra-ui/react";
import {Context} from "../../../index";
import userService from '../../../service/userService'
import ModalEditPost from "./ModalEditPost";

const PostsModel = ({config, getPosts}) => {

	const uniqKey = config.id
	const {user} = useContext(Context)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const toast = useToast()

	const createAlert = (type, msg) => {
		toast({
			title: 'Info',
			description: msg,
			status: type,
			duration: 2000,
			isClosable: false,
			position: 'top'
		})
	}

	const deletePost = () => {
		if(user.user.email === config.author) {
			userService.deletePosts({id: uniqKey})
				.then(async res => {
					await getPosts()
					await createAlert('error', res.message)
				})
		}
	}

	return (
		<Box background={'gray.700'} p={3} rounded={5} maxH={'500px'}>
			<ModalEditPost isOpen={isOpen} onOpen={onOpen} onClose={onClose} config={config} getPosts={getPosts}/>
			<Heading fontSize={'23px'} color={'bisque'}>
				{config.title}
				<Wrap/>
				<Badge color={'green.300'} p={1} mx={2}>{config.author}</Badge>
				<Badge color={'green.300'} p={1} mx={2}>{config.createdAt.replace(/T|(....Z)/gmi, ' ')}</Badge>
				<Divider my={2}/>
			</Heading>
			<Box overflow={'scroll'} height={'85%'}>
				<Image src={config.media} h={'auto'} rounded={5}/>
				<Divider my={2}/>
				<Text color={'bisque'}>
					{config.description}
				</Text>
				<Divider my={2}/>
				{
					user.user.email === config.author
						? <Box>
							<Badge onClick={onOpen} as={"button"} color={'red.300'} p={1} mx={2}>edit</Badge>
							<Badge onClick={deletePost} as={"button"} color={'red.300'} p={1} mx={2}>delete</Badge>
						</Box>
						: <Box/>
				}
			</Box>
		</Box>
	);
};

export default PostsModel;