import { Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import SideBar from '../sidebar/SideBar'

const ProtectedRoute = ({ element: Element, ...rest }) => {
	const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

	if (authLoading)
		return (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)

	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<>
						<SideBar/>
						<Element {...rest} {...props} />
					</>
				) : (
					<Navigate to='/login' />
				)
			}
		/>
	)
}

export default ProtectedRoute