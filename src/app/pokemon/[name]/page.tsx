// import { Metadata } from "next";
// import { ServerNoteAPI } from "@/lib/server/ServerNoteAPI";
// import { NoteEditorPage } from "./NoteEditorPage/NoteEditorPage";
import {searchPokeMen} from '@/app/api/route';
import Image from 'next/image';

type NoteIdProps = {
    params: { name: string }
  }
  
  export const revalidate = 0;

  
  const PokemonDetails = async ({ params }: NoteIdProps) => {
    const {name}= await params;
    const pokemon = await searchPokeMen(name);
    const imgUrl = pokemon.sprites.other['official-artwork']?.front_default;
    const pokemonTypes = pokemon.types.map((type: any) => type.type.name).join(', ');
    const pokemonStats = pokemon.stats.slice(0, 7).map((stats: any) => stats.stat.name).join(', ')
    const pokemonAbilities = pokemon.abilities.slice(0, 7).map((ability: any) => ability.ability.name).join(', ');
    const pokemonMoves = pokemon.moves.slice(0, 7).map((move: any) => move.move.name).join(', ');
   
        return (
            <div className='pokemon-detail-page'>
                <Image  
                    width={150} 
                    height={150} 
                    alt={pokemon.name + 'artwork'} 
                    priority={true} 
                    src={imgUrl}
                    className='pokemon-detail-page-image'
                />  
                <div className='pokemon-detail-page-text-content'>
                    <div><strong>Name: </strong>{pokemon.name}</div>
                    <div><strong>Type: </strong>{pokemonTypes}</div>
                    <div><strong>Stats: </strong>{pokemonStats}</div>
                    <div><strong>Abilities: </strong>{pokemonAbilities}</div>
                    <div><strong>Some Moves: </strong>{pokemonMoves}</div>
                </div>
            </div>
        )
  }
  
  export default PokemonDetails;
  