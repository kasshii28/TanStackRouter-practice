import { createLazyFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <Fragment>
      <div>Hello About!</div>
    </Fragment>
  )
}
