import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Flashcard = () => (
  <Card>
    <CardHeader
      title="Question"
      subtitle="Hint"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      Answer
    </CardText>
    <CardActions disable='true'>
      <FlatButton label="Previous"/>
      <FlatButton label="Next"/>
    </CardActions>
  </Card>
);

export default Flashcard;