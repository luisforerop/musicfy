import { Carousel } from '@components'
import { FC } from '@models'
import React, { FunctionComponent } from 'react'

type SectionProps = {
  itemsList: any[]
  Container: FunctionComponent | FC<any>
  title: string
}

export const Section: FC<SectionProps> = ({ Container, itemsList, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <Carousel
        Container={Container}
        itemsList={itemsList}
      />
    </section>
  )
}
