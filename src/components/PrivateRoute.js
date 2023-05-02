import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRefreshing, selectToken } from 'redux/selectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({ component: Component, redirectTo = '/' }) {
	const isLogggedIn = useSelector(selectToken);
	const isRefreshing = useSelector(selectIsRefreshing);

	const shouldRedirect = !isLogggedIn && !isRefreshing;

	return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}

PrivateRoute.propTypes = {
	component: PropTypes.object.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
