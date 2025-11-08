import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Item = ({prod}) => {
   
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          ${prod.price},00
        </Card.Text>
        <Link className='btn btn-dark' to={`/item/${prod.id}`}> Ver Más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item