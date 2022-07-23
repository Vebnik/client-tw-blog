import HomePage from "../page/home/HomePage";
import StartPage from "../page/RegLogin/StartPage";

export const authRoutes = [
	{
		path: '/home',
		Component: HomePage
	}
]

export const publicRoutes = [
	{
		path: '/',
		Component: StartPage
	}
]