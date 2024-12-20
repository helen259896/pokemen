// import DefaultTemplate from '@/components/templates/DefaultTemplate';
// import ItemList from '@/components/UI/organisms/ItemList';
// import PokemonList from '@/lib/types';

// import { InfiniteData } from '@tanstack/react-query';
// import { FC } from 'react';
// import {getPokeMen} from '@/app/api/route';
import {getPokeMen, getAllPokeMenName} from '@/app/api/route';
import List from '@/components/List';

// import PokemanCard from './PokemanCard';
// interface Props {
// //   pokemonList: InfiniteData<PokemonList>;
// }

// interface pokeman {
//     name: string;
//     url: string;
//     imgAlt: string;
//     imgUrl?: string;
//   }

async function HomePage() {
  const {count, next, previous, resultMap} = await getPokeMen(0);
  //need to pass down to client comp to set it in localStorage
  const pokemenList = await getAllPokeMenName();
// console.log('home home howm', count);
// console.log('home home howm', next);
// console.log('home home howm', previous);
// console.log('home home howm', resultMap);
  return (
      <div>
        <div>this is HomePage</div>
        <List count={count} next={next} previous={previous} list={resultMap}/>
        </div>
  );
};

export default HomePage;