import { CompactDisc } from '@components'
import { FC } from '@models'
import styles from './AlbumImage.module.css'

const {
  container,
  imageContainer,
  compactDiscContainer,
} = styles

type AlbumImageProps = {
  image: string
}

export const AlbumImage: FC<AlbumImageProps> = ({ image }) => {
  return (
    <div className={container}>
      <div className={imageContainer}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={image} alt="" />
      </div>
      <div className={compactDiscContainer} >
        <CompactDisc />
      </div>
    </div>
  )
}
