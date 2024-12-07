import { createFileRoute, redirect } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if(!isLogged()){
      throw redirect({
        to: "/login"
      })
    }
  },
  component: () => <Fragment>Hello /profile</Fragment>,
})

