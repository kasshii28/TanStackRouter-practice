import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
import { AuthContext } from '../hooks/useAuth';

type RouterContext = {
    authentication: AuthContext;
}
export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <Fragment>
            <ul>
                <li>
                    <Link to="/">Home</Link>{' '}
                </li>
                <li>
                    <Link to="/about">About</Link> {' '}
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/profile">Proifile</Link>
                </li>
                <li>
                    <Link to="/dashboard">DashBoard</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
            <hr/>
            <Outlet/>
        </Fragment>
    )
})