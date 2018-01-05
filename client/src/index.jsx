import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flashcard from './components/Flashcard.jsx';

const App = () => (
  <Grid>
    <Col xs={6} xsOffset={3}>
      <MuiThemeProvider>
        <Flashcard />
      </MuiThemeProvider>
    </Col>
  </Grid>
);

ReactDOM.render(<App />, document.getElementById('app'));


