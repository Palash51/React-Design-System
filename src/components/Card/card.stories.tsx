
import React from 'react';
import Card from './card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const DefaultCard = () => (
  <Card
    title="Default Card"
    subtitle="A simple card"
    body="This is the body of the default card."
  />
);

export const CardWithFooter = () => (
  <Card
    title="Card with Footer"
    subtitle="A card with a footer"
    body="This card has a footer."
    footer={<button>Click Me</button>} 
  />
);

export const CardWithShadow = () => (
  <Card
    title="Card with Shadow"
    subtitle="A card with a shadow"
    body="This card has a shadow."
    shadow // The shadow prop is set to true
  />
);

