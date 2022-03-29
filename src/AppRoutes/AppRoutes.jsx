import { Switch, Route } from 'react-router-dom'
import { useContext } from 'react'

import Layout from '../components/Layout/Layout'
import UserProfile from '../components/Profile/UserProfile'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import authContext from '../store/authContext'
import { Redirect } from 'react-router-dom'
import ProfilePage from '../pages/ProfilePage'

function AppRoutes() {
	const { isLoggedIn } = useContext(authContext)
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<PrivateRoutes
					component={<AuthPage />}
					when={!isLoggedIn}
					to={'/'}
					path={'/auth'}
				/>
				<PrivateRoutes
					component={<ProfilePage />}
					when={isLoggedIn}
					to={'/auth'}
					path={'/profile'}
				/>
				<Route path='*'>
					<Redirect to='/' />
				</Route>
			</Switch>
		</Layout>
	)
}

export default AppRoutes
