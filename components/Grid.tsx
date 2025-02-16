import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
          {[
            {title: 'Title1', desciption: 'Desc1', id:1 },
            {title: 'Title1', desciption: 'Desc1', id:1 },
            {title: 'Title1', desciption: 'Desc1', id:1 },
            {title: 'Title1', desciption: 'Desc1', id:1 }
          ].map
          ((item) => (
            <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.desciption}
            />
          )
          )}
        </BentoGrid>
    </section>
  )
}

export default Grid