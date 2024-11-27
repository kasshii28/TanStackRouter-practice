import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';

export const Route = createRootRoute({
    component: () => (
        <Fragment>
            <div>
                <Link to="/">Home</Link>{' '}
                <Link to="/about">About</Link> {' '}
                <Link to="/posts">Posts</Link>
            </div>
            <hr/>
            <Outlet/>
        </Fragment>
    )
})