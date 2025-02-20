import React from 'react'

interface TitleProps {
    content: string;
}

export default function Title({ content }: TitleProps) {
  return (
    <h2 className="font-black text-[32px]">{ content }</h2>
  )
}
