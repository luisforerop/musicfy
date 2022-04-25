import { Artist, FC } from "@models";
import Link from "next/link";

export const ArtistItemList: FC<Artist> = ({ name, image }) => {
  if (!image) return null;

  return (
    <Link href={name.replace(/ /g, '-').replace(/\//, '-')}>
      <a>
        <div style={{
          display: 'flex',
          margin: '10px 0',
          alignItems: 'center',
        }}>
          <div
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundColor: '#ff4',
              height: '50px',
              width: '50px',
              minWidth: '50px',
            }}
          >
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img src={image} alt="" style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} />
          </div>
          <h2 style={{
            margin: '0',
            padding: '0 1rem',
            fontSize: '20px',
          }}>{name}</h2>
        </div>
      </a>
    </Link>
  )
}