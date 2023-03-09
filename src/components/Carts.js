import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {Fragment} from 'react';

function OfferModal({children}) {
  return <>
          {children}
         </>
}


function Carts() {
  const message = [ {
    img: "#",
    h: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }, {
    img: "#",
    h: "Special title treatment",
    text: "With supportimg tetxt below as a natural lead-in to additional content."
  }
]
  return (
    <OfferModal>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{message[0].h}</Card.Title>
        <Card.Text>{message[0].text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </OfferModal>
  );
}

export default Carts;