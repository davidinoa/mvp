import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Col, Row} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CreateForm from './components/CreateForm.jsx';
import Flashcard from './components/Flashcard.jsx';
import NavBar from './components/NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcards: [{}],
      currentCardIndex: 0
    };
  }

  componentDidMount() {
    $.get('/flashcards', (data) => {
      this.setState({
        flashcards: data,
        currentCardIndex: 0
      });
    });
  }

  getNextCard() {
    if (this.state.currentCardIndex === (this.state.flashcards.length - 1)) {
      this.setState({ 
        currentCardIndex: 0
      });
    } else {
      this.setState({ 
        currentCardIndex: this.state.currentCardIndex + 1
      });
    }
  }

  getPreviousCard() {
    if (this.state.currentCardIndex === 0) {
      this.setState({ 
        currentCardIndex: this.state.flashcards.length - 1
      });
    } else {
      this.setState({ 
        currentCardIndex: this.state.currentCardIndex - 1
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar flashcards={this.state.flashcards}/>
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3}>
              <MuiThemeProvider>
                <Flashcard 
                  flashcard={this.state.flashcards[this.state.currentCardIndex]}
                  getNextCard={this.getNextCard.bind(this)}
                  getPreviousCard={this.getPreviousCard.bind(this)}
                />
              </MuiThemeProvider>
            </Col>
          </Row>
          <Row>
            <Col xs={8} xsOffset={0}>
              <CreateForm />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


