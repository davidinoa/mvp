import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Button from 'react-bootstrap';

const Flashcard = ({flashcard, getNextCard, getPreviousCard, currentCardIndex, totalCards, deleteCurrentCard}) => (
  <Card>
    <CardHeader
      title={flashcard.question}
      titleStyle={{fontSize: '32px'}}
      subtitle={`${currentCardIndex + 1} of ${totalCards}`}
      showExpandableButton={true}
    />
    <CardText 
      expandable={true}
      textStyle={{fontSize: '24px'}}
    >
      {flashcard.answer}
    </CardText>
    <CardActions disable='true'>
      <FlatButton 
        label="Previous"
        onClick={getPreviousCard}
      />
      <FlatButton 
        label="Next"
        onClick={getNextCard}
      />
      <FlatButton 
        label="Delete"
        onClick={deleteCurrentCard}
      />
    </CardActions>
  </Card>
);

export default Flashcard;