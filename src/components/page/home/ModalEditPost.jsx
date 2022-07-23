import React, {useContext, useState} from 'react';
import {
	Button,
	Modal, ModalBody,
	ModalCloseButton,
	ModalContent, ModalFooter,
	ModalHeader,
	ModalOverlay, useToast,
} from "@chakra-ui/react";
import CreatePostForm from "./CreatePostForm";
import {Context} from "../../../index";
import userService from "../../../service/userService";


const ModalEditPost = ({isOpen, onOpen, onClose, config, getPosts}) => {

	const [title, setTitle] = useState(config.title)
	const [description, setDescription] = useState(config.description)
	const [media, setMedia] = useState(config.media)
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

		console.log({formData, id: config.id})

		userService.editPosts({formData, id: config.id})
			.then(res => {
				if(res.ok) {
					createAlert('success', res.message)
					onClose()
					return getPosts()
				}
				createAlert('error', res.message)
				onClose()
			})

		setTitle(''); setDescription(''); setMedia('')
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
			<ModalOverlay />
			<ModalContent mx={5}>
				<ModalHeader>Edit post</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<CreatePostForm
						title={title}
						setTitle={setTitle}
						submitForm={submitForm}
						setMedia={setMedia}
						media={media}
						setDescription={setDescription}
						description={description}/>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
};

export default ModalEditPost;