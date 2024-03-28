import {FC} from 'react'
import Card from 'react-bootstrap/Card';


export interface Icard {
    img?: string,
    children: React.ReactNode
}

export const CardInfo: FC<Icard> = ({ img, children }: Icard) => {
  return (
    <Card style={{ width: '18rem' }}>
        {img !== undefined ? <Card.Img variant="top" src={img} alt='Image cap'/> :''}
        {children}
    </Card>
  )
}
