import React from 'react';
import {Button, FormControl, FormHelperText, FormLabel, Input, Textarea, Wrap} from "@chakra-ui/react";

const CreatePostForm = ({submitForm, setTitle, setDescription, setMedia, title, description, media}) => {
	return (
		<FormControl>
			<FormLabel>Title</FormLabel>
			<Input value={title} onChange={(ev) => setTitle(ev.target.value)} type='text' placeholder={'Escargot tastes'}/>
			<FormHelperText>This is title posts</FormHelperText>
			<Wrap my={'10px'}/>
			<FormLabel>Description</FormLabel>
			<Textarea value={description} onChange={(ev) => setDescription(ev.target.value)} resize={'vertical'} placeholder={'Squeezed, sticky pudding is best flavored with al dente tabasco.'}/>
			<FormHelperText>This is description posts</FormHelperText>
			<Wrap my={'10px'}/>
			<FormLabel>Media</FormLabel>
			<Input value={media} onChange={(ev) => setMedia(ev.target.value)} type='text' placeholder={'Link to media, example -> https://youtu.be/... (short url)'}/>
			<FormHelperText>This is media posts</FormHelperText>
			<Button onClick={submitForm} mx={'23%'} px={'5px'} borderColor={'gray.900'} _hover={{backgroundColor: 'gray.900'}} w={'55%'} variant={'outline'}>Submit</Button>
		</FormControl>
	);
};

export default CreatePostForm;