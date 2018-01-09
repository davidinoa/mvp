import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Button from 'react-bootstrap';

const Flashcard = ({flashcard, getNextCard, getPreviousCard, currentCardIndex, totalCards, deleteCurrentCard}) => (
  <Card>
    <div style={{height: 'calc(7vh)'}}></div>
    <CardHeader
      title={flashcard.question}
      titleStyle={{fontSize: '32px'}}
      subtitle={`${currentCardIndex + 1} of ${totalCards}`}
      showExpandableButton={true}
    />
    <div style={{height: 'calc(3vh)'}}></div>
    <CardText 
      expandable={true}
      style={{fontSize: '20px', fontStyle: 'italic'}}
    >
      {flashcard.answer}
    </CardText>
    <div style={{height: 'calc(14vh)'}}></div>
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
    <div style={{height: 'calc(3vh)'}}></div>
  </Card>
);

export default Flashcard;