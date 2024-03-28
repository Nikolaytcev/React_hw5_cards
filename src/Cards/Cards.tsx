import { CardInfo } from '../Card/Card'
import { CardItem } from '../CardItem/CardItem'

interface Icarditem {
    cards: {img?: string,
        title: string,
        text: string, 
        nameBtn: string}[]
}

export const Cards = ({ cards }: Icarditem) => {

  return (
    <div className='container'>
        {cards.map((card) => <CardInfo key={card.title} img={card.img} children={<CardItem title={card.title} text={card.text} nameBtn={card.nameBtn}/>}/>)}        
    </div>
  )
}
