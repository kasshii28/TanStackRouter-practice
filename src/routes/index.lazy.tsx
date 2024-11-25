import { createLazyFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Fragment>
      <div>Hello Index!</div>
    </Fragment>
  )
}

