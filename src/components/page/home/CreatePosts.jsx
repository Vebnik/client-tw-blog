import React, {useContext, useState} from 'react';
import { Box, useToast } from "@chakra-ui/react";
import userService from '../../../service/userService'
import {Context} from "../../../index";
import CreatePostForm from "./CreatePostForm";

const CreatePosts = () => {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [media, setMedia] = useState('')
	const {user} = useContext(Context)
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

	const submitForm = () => {

		const formData = {
			title,
			description,
			author: user.user.email,
			media,
			createdAt: new Date()
		}

		userService.createPosts(formData)
			.then(res => res.ok
				? createAlert('error', res.message)
				: createAlert('error', res.message)
			)

		setTitle(''); setDescription(''); setMedia('')
	}

	return (
		<Box width={'70%'} p={2} background={'gray.700'} rounded={5}>
			<CreatePostForm
				title={title}
				description={description}
				setDescription={setDescription}
				setTitle={setTitle}
				media={media}
				setMedia={setMedia}
				submitForm={submitForm}/>
		</Box>
	);
};

export default CreatePosts;