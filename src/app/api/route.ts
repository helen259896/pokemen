import { notFound } from 'next/navigation';

import 'server-only';

//image


export async function getPokeMen(offset:number, limit=30) {
  const res = await fetch( //pokemon?offset=20&limit=20",
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const {count, next, previous, results} = (await res.json());
  if (results.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }
  const resultMap = results.map((item: any) => ({
       name: item.name,
       url: item.url,
       imgAlt: item.name + ' artwork',
       imgUrl: `https://img.pokemondb.net/artwork/large//${item.name}.jpg`,
  }))

  return {count, next, previous, resultMap};
}
export async function searchPokeMen(pokemonName: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const results = (await res.json());
  if (results.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }
  // console.log('search pokeman', pokemonName);
  console.log('search pokeman', results);
  return results;
}


export async function getAllPokeMenName() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon`,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }
  const {count} = (await res.json());

  const allResult = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${count}`,
  );
  const allPokemen = (await allResult.json());
  const pokemenList = allPokemen?.results.map((item: any) => item.name)
  return pokemenList;
}