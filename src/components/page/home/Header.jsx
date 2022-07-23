import React, {useContext} from 'react';
import {
	Box,
	Button,
	Icon,
	IconButton,
	Menu,
	MenuButton, MenuItem,
	MenuList,
	SimpleGrid,
	useBreakpointValue,
} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../../utils/ColorModeSwitcher";
import {FaCogs, FaIdCard, FaList, FaQuinscape} from "react-icons/all";
import AllPosts from "./AllPosts";
import CreatePosts from "./CreatePosts";
import MyPosts from "./MyPosts";
import {Context} from "../../../index";

const Header = ({setPage}) => {

	const hidden = useBreakpointValue({ base: false, md: true})
	const {user} = useContext(Context)

	const setNewPage = (ev) => {
		switch (ev.target.value) {
			case 'allPost': setPage(<AllPosts/>)
				break
			case 'createPost': setPage(<CreatePosts/>)
				break
			case 'myPost': setPage(<MyPosts/>)
				break
		}
	}

	return (
		<Box background={'gray.600'} width={'100%'} minH={'40px'} maxH={'max-content'} m={'auto'} p={2} rounded={5} shadow={5}>
			<SimpleGrid columns={6} spacingX={5} maxW={'100%'} templateColumns={`auto auto`} justifyContent={'space-between'} >
				<Menu>
					<MenuButton variant={'solid'} icon={<Icon as={FaList}/>} as={IconButton} display={hidden ? 'none' : 'block'}/>
					<MenuList background={'gray.600'} onClick={setNewPage}>
						<MenuItem value={'allPost'} h={'80%'}>All posts</MenuItem>
						<MenuItem value={'createPost'} h={'80%'}>Create posts</MenuItem>
						<MenuItem value={'myPost'} h={'80%'}>My posts</MenuItem>
					</MenuList>
				</Menu>
				<SimpleGrid spacingX={1} columns={3} width={"max-content"} alignItems={'center'} display={hidden ? 'grid' : 'none'}>
					<Button onClick={setNewPage} value={'allPost'} variant={'solid'} h={'80%'}>All posts</Button>
					<Button onClick={setNewPage} value={'createPost'} variant={'solid'} h={'80%'}>Create posts</Button>
					<Button onClick={setNewPage} value={'myPost'} variant={'solid'} h={'80%'}>My posts</Button>
				</SimpleGrid>
				<Box>
					<Menu>
						<MenuButton variant={'solid'} icon={<Icon as={FaCogs}/>} as={IconButton}/>
						<MenuList background={'gray.600'}>
							<MenuItem><Icon as={FaIdCard} mx={'5px'}/>{user.user.email}</MenuItem>
							<MenuItem><Icon as={FaQuinscape} mx={'5px'}/>Exit</MenuItem>
						</MenuList>
					</Menu>
					<ColorModeSwitcher/>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default Header;