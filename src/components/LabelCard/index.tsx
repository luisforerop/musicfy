import { FC } from '@models'

type LabelCardProps = {
  backgroundColor?: string
}

export const LabelCard: FC<LabelCardProps> = ({ backgroundColor = '#F2F', children }) => {
  return (
    <label style={{
      backgroundColor,
      borderRadius: '100px',
      padding: '5px 10px',
      width: 'fit-content',
    }}>
      {children}
    </label>
  )
}
