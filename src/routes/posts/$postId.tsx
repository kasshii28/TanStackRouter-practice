import { createFileRoute } from '@tanstack/react-router'
import { getPokemon } from '../../api/pokemon';
import { Fragment } from 'react/jsx-runtime';

export const Route = createFileRoute('/posts/$postId')({
    component: RouteComponent,
    loader: async ({ params })=> await getPokemon(params.postId),
})

function RouteComponent() {
    const { postId } = Route.useParams();
    const pokemon = Route.useLoaderData();
    console.log(pokemon)
    return (
        <Fragment>
            <h2>
                ({ postId }) { pokemon.name }
            </h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <dl>
                <dt>Height</dt>
                <dd>{pokemon.height}</dd>
                <dt>Weight</dt>
                <dd>{pokemon.weight}</dd>
            </dl>
        </Fragment>
    )
}

