"use client"
import React, { FC, useState, useEffect } from 'react';
// import Link from 'next/link';
import PokemanCard from './PokemanCard';
import {PokemanList, pokemen} from '@/types';
import useScrollPosition from '@/hooks/useScrollPosition';
// import { getPokeMen } from '@/app/api/route';

const limit = 30;
const List: FC<PokemanList> = ({count, next, previous, list}) => {
  // console.log('List', list);
  const [listData, setListData] = useState(list);
  const [nextUrl, setNext] = useState(next);
  const [previousUrl, setPreviousUrl] = useState(previous);
  const [fetchNext, setFetchNext] = useState(false);
  const position = useScrollPosition();
  const listLength = list.length;
  
  useEffect(() => {
    //only scroll down updated the list data???
    if ((position.y > 4600 && position.y < 4900 && !fetchNext ) ||
        (position.y > 10000 && position.y < 10130 && !fetchNext ) ||
        (position.y > 15400 && position.y < 15500 && !fetchNext ) ||
        (position.y > 20500 && position.y < 20600 && !fetchNext )
) {
        // console.log('list!', position);
        setFetchNext(true);
        fetch(nextUrl,)
          .then(res => res.json())
          .then(data => {
            const resultMap = data.results.map((item: any) => {
                return {
                    name: item.name,
                    url: item.url,
                    imgAlt: item.name + ' artwork',
                    imgUrl: `https://img.pokemondb.net/artwork/large//${item.name}.jpg`,
                }
            });
            setNext(data.next);
            setPreviousUrl(data.previous);
            setListData([...listData, ...resultMap]);
            console.log('fetch next page',resultMap);
          })
        
    }
    if ((position.y > 4900 && position.y < 5100 && fetchNext) || 
        (position.y > 10230 && position.y < 10430 && fetchNext) ||
        (position.y > 15600 && position.y < 15800 && fetchNext)
) {
        setFetchNext(false);
    }
  }, [position])

//   console.log('list!', position);
  return (
    <div>
        {listData.map(listItem => (
            // <div key={listItem.name}  >{listItem.name}</div>
            <PokemanCard pokeman={listItem} key={listItem.name} />
        ))} 
    </div>
    
  );
};

export default List;
