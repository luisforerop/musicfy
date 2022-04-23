import { FC } from '@models'
import { FunctionComponent } from 'react'

type CarouselProps = {
  itemsList: any[]
  Container: FunctionComponent | FC<any>
}

export const Carousel: FC<CarouselProps> = ({ Container, itemsList }) => {
  return (
    <ul style={{
      display: 'flex',
      overflowX: 'scroll',
      gap: '10px',
      width: '100%',
      margin: '0',
      padding: '10px',
      scrollBehavior: 'smooth',
    }}>
      {itemsList.map((itemProps, index) => (
        <li key={`${index}`} style={{
          listStyle: 'none',
        }}>
          <Container {...itemProps} />
        </li>
      ))}
    </ul>
  )
}
