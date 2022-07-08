import Link from 'next/link';
import React from 'react';
import {
  Card as ReactrapCard,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';

export const Card = (props) => {
  return (
    <CardGroup>
      <ReactrapCard>
        <CardImg
          top
          width="100%"
          height="300px"
          src="/img/hotel_1.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Premier Inn Doha Education City Hotel</CardTitle>
          <CardSubtitle>Destino: Qatar</CardSubtitle>
          <CardText>14 dias, salida 25-jul desde Buenos Aires</CardText>
          <Link href={`/form`}>
            <Button>Comprar</Button>
          </Link>
        </CardBody>
      </ReactrapCard>
      <ReactrapCard>
        <CardImg
          top
          width="100%"
          height="300px"
          src="/img/hotel_2.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Golden Ocean Hotel</CardTitle>
          <CardSubtitle>Destino: Al Meena St, Doha, Catar</CardSubtitle>
          <CardText>Hotel de 4 estrellas, salida 20-jul desde Chaco</CardText>
          <Link href={`/form`}>
            <Button>Comprar</Button>
          </Link>
        </CardBody>
      </ReactrapCard>
      <ReactrapCard>
        <CardImg
          top
          width="100%"
          height="300px"
          src="/img/hotel_3.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>M Grand Hotel Doha City Centre</CardTitle>
          <CardSubtitle>
            Destino: Behind Qncc, Al Yass Street، Doha, Catar
          </CardSubtitle>
          <CardText>Hotel de 3 estrellas, salida 28-oct desde Chaco</CardText>
          <Link href={`/form`}>
            <Button>Comprar</Button>
          </Link>
        </CardBody>
      </ReactrapCard>
    </CardGroup>
  );
};

export default Card;
