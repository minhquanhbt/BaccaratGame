import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function AdminRoute({ component: Component, ...rest }) {
    const infoUser = useSelector(state => state.infoUser.user);
    return (
        <Route
            {...rest}
            render={props =>
                infoUser?.roles.id === 1 ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: '/home' }} />
                    )
            }
        />
    )
}

export default AdminRoute;
