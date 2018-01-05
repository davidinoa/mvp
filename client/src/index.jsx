import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flashcard from './components/Flashcard.jsx';
import NavBar from './components/NavBar.jsx';

const App = () => (
  <div>
    <NavBar />
    <Grid>
      <Col xs={8} xsOffset={2}>
        <MuiThemeProvider>
          <Flashcard />
        </MuiThemeProvider>
      </Col>
    </Grid>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));


