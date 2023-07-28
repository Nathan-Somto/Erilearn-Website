import React from 'react'
type Props = {
  src: string,
  width:string,
  height: string
}
const YoutubeVideo = ({src,height, width}:Props) => {
  return (
    <iframe
    width={width}
    height={height}
    src={src}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className="rounded-[32px]"
  ></iframe>
  )
}

export default YoutubeVideo