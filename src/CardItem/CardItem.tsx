import {FC} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export interface Icarditem {
    title: string,
    text: string, 
    nameBtn: string
}

export const CardItem: FC<Icarditem> = ({ title, text, nameBtn }) => {
  return (
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {text}
            </Card.Text>
            <Button variant="primary">{nameBtn}</Button>
        </Card.Body>
  )
}
