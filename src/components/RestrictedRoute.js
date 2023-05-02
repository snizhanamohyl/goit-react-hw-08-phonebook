import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import PropTypes from 'prop-types';

export default function RestrictedRoute({ component: Component, redirectTo = '/' }) {
	const isLogggedIn = useSelector(selectToken);

	return isLogggedIn ? <Navigate to={redirectTo} /> : <Component />;
}

RestrictedRoute.propTypes = {
	component: PropTypes.object.isRequired,
	redirectTo: PropTypes.string.isRequired,
};
