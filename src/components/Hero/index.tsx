import React from 'react'
import data from '@/data/data.json';
import Image from 'next/image';
type Props = {}

const Hero = (props: Props) => {
    const {hero} = data;
  return (
    <header>
        <div>
            <h1>{hero.heading1} <span>{hero.span}</span></h1>
            <p>{hero.paragraph}</p>
        </div>
        <div>
            <figure className=''>
                <Image src={'/ope.png'} alt="staff"  height={350} width={350}/>
                <figcaption><span>{hero.tagSpan}</span>{hero.tagPara}</figcaption>
            </figure>
            <figure>
            <Image src={'/ima_son.png'} alt="student"  height={350} width={350}/>
                <figcaption> <span>{hero.tagSpan}</span>{hero.tagPara}</figcaption>
            </figure>
        </div>
    </header>
  )
}

export default Hero