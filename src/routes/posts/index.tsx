// posts.index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
import { getPokemonList } from '../../api/pokemon';

export const Route = createFileRoute('/posts/')({
  component: PostsIndexComponent,
  loader: getPokemonList,
});

function PostsIndexComponent() {
  const pokemons = Route.useLoaderData();
  return (
    <Fragment>
      <h2>Pokemons</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link 
              to={'/posts/$postId'}
              params={{
                postId: pokemon.id,
              }}>  
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}