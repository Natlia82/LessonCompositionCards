import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {Fragment} from 'react';

function OfferModal({children}) {
  return <>
          {children}
         </>
}

function Modal({message, children}) {
    return  <Card style={{ width: '18rem' }}>
       { message.img && <Card.Img variant="top" src={message.img} /> }
              
              <Card.Body>
                <Card.Title>{message.h}</Card.Title>
                <Card.Text>{message.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
}

function Carts() {
  const message = [ {
    img: "#",
    h: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }, {
   
    h: "Special title treatment",
    text: "With supportimg tetxt below as a natural lead-in to additional content."
  }
]
  return (
    <OfferModal> 
        <Modal message={message[0]} />
        <Modal message={message[1]} />
    </OfferModal>
  );
}

export default Carts;