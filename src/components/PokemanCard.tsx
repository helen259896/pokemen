import React, { FC } from 'react';
import Image from 'next/image';
// import Title from '../../atoms/Title';
// import Text from '../../atoms/Text';
import Link from 'next/link';
// import queryClient from '@/lib/queryClient';
// import { styled } from '@/stitches.config';
import {pokeman} from '@/types';




const PokemanCard: FC<pokeman> = ({pokeman}) => {
    // console.log('PokemanCard', pokeman);
    const path = '/pokemon/' + pokeman.name;
  return (
      <div key={pokeman.name}>
          <Image  
            width={100} 
            height={100} 
            alt={pokeman.imgAlt} 
            priority={true} 
            src={pokeman.imgUrl}
            className='cardImage'
          />
          <Link href={path}>{pokeman.name}</Link>
      </div>
    
  );
};

export default PokemanCard;
