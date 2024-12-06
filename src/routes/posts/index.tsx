// posts.index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
// Note the trailing slash, which is used to target index routes
export const Route = createFileRoute('/posts/')({
  component: PostsIndexComponent,
})

interface BlogPost {
  id: string;
  title: string;
}

const mockPosts: BlogPost[] = [
  { id: "1", title: "First Blog Post" },
  { id: "2", title: "Second Blog Post" },
  { id: "3", title: "Third Blog Post" },
];

function PostsIndexComponent() {
  return (
    <Fragment>
        <p>Posts Index Page!</p>
        {mockPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
    </Fragment>
  )
}