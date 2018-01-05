import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Flashcard = ({flashcard, getNextCard}) => (
  <Card>
    <CardHeader
      title={flashcard.question}
      subtitle={flashcard.hint}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      {flashcard.answer}
    </CardText>
    <CardActions disable='true'>
      <FlatButton label="Previous"/>
      <FlatButton 
        label="Next"
        onClick={getNextCard}
      />
    </CardActions>
  </Card>
);

export default Flashcard;