import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
        <NavBar />
        <Grid>
          <Col xs={8} xsOffset={2}>
            <MuiThemeProvider>
              <Flashcard 
                flashcard={this.state.flashcards[this.state.currentCardIndex]}
                getNextCard={this.getNextCard.bind(this)}
                getPreviousCard={this.getPreviousCard.bind(this)}
              />
            </MuiThemeProvider>
          </Col>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


