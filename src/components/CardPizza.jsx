import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import React from 'react'
import '/src/index.css'

const CardPizza = ({ name, price, ingredients, img }) => {
  const formatNumber = (num) => num.toLocaleString('es-ES')
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p>Ingredientes:</p>
          <p>
            {' '}
            <img src="/src/assets/icons8-pizza-16.png" alt="" />
            {ingredients.map((ingredient, index) => {
              const isLastItem = index === ingredients.length - 1
              return (
                <span key={index}>
                  {ingredient}
                  {isLastItem ? '.' : ', '}
                </span>
              )
            })}
          </p>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <p className="price-pizza">
          <strong>Precio: ${price.toLocaleString()}</strong>
        </p>
        <Button variant="light">
          Ver Más
          <img
            style={{ width: '16px' }}
            src="src/assets/icons8-eyes-48.png"
            alt=""
          />
        </Button>
        <Button variant="dark">
          <img
            style={{ width: '16px' }}
            src="src/assets/icons8-cart-48.png"
            alt=""
          />
          Añadir
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardPizza
