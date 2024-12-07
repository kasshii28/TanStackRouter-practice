import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime';
import { isAuthenticated, signIn, signOut } from '../utils/auth';
export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  const router = useRouter();

  return (
    <Fragment>
      <h2>Login</h2>
      {isAuthenticated() ? (
        <Fragment>
          <p>Hello User!</p>
          <button
            onClick={async () => {
              signOut();
              router.invalidate();
            }}>
              Sign Out
          </button>
        </Fragment>
      ) : (
        <button
            onClick={async () => {
              signIn();
              router.invalidate();
            }}>
              Sign In
          </button>
      )}
    </Fragment>
  )
}
