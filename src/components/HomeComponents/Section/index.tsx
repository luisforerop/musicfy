import { Carousel, SearchBar, SearchIcon } from '@components'
import { FC } from '@models'
import React, { FunctionComponent } from 'react'
import ContentLoader from 'react-content-loader'

type SectionProps = {
  itemsList: { [key: string]: any }[]
  Container: FunctionComponent | FC<any>
  title: string
  EmptyComponent?: FunctionComponent | FC<any>
  CardForSearchBar?: FunctionComponent | FC<any>
  propToLookingFor?: string
  showLoaders?: boolean
  numberOfLoaders?: number
}

const Loader = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={300}
    viewBox="0 0 200 300"
    backgroundColor="var(--background-primary-contrast)"
    foregroundColor="var(--background-secondary-contrast)"
  >
    <rect x="0" y="0" rx="3" ry="3" width="200" height="200" />
    <rect x="0" y="210" rx="3" ry="3" width="200" height="25" />
    <rect x="0" y="250" rx="3" ry="3" width="200" height="25" />
  </ContentLoader>
)

export const Section: FC<SectionProps> = ({
  Container,
  itemsList,
  title,
  EmptyComponent,
  CardForSearchBar,
  propToLookingFor,
  showLoaders,
  numberOfLoaders,
}) => {
  return (
    <section>
      <header
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          padding: '0 1rem',
        }}
      >
        <h1>{title}</h1>
        {
          itemsList.length > 0 ?
            <SearchBar
              items={itemsList}
              ItemContainer={CardForSearchBar}
              propToLookingFor={propToLookingFor}
            /> :
            null
        }
      </header>
      {
        itemsList.length > 0 ?
          <Carousel
            Container={Container}
            itemsList={itemsList}
          /> :
          showLoaders ?
            <Carousel
              Container={Loader}
              itemsList={Array.from({ length: numberOfLoaders ?? 6 }, (_, i) => (i))}
            /> :
            EmptyComponent ?
              <EmptyComponent /> :
              'No hay resultados'
      }
    </section>
  )
}
