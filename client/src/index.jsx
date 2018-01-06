import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Col, Row, Label} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CreateForm from './components/CreateForm.jsx';
import Flashcard from './components/Flashcard.jsx';
import NavBar from './components/NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashcards: [{}],
      currentCardIndex: 0,
      topics: [],
      currentTopic: '', 
    };
  }

  componentDidMount() {
    this.fetchAllCards();
  }

  fetchAllCards() {
    $.get('/flashcards', (data) => {
      this.setState({
        flashcards: data,
        currentCardIndex: 0,
        currentTopic: ''
      });
    })
      .done(() => {
        this.setState({
          topics: Array.from(
            new Set(this.state.flashcards.map(flashcard => flashcard.topic))
          )
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

  deleteCurrentCard() {
    const currentCard = this.state.flashcards[this.state.currentCardIndex];
    
    $.ajax({
      url: '/flashcards',
      method: 'DELETE',
      data: currentCard
    })
      .done(() => {
        this.fetchAllCards();
      });
  }

  handleTopicSelection(topic) {
    $.get('/flashcards', (data) => {
      this.setState({
        currentTopic: topic,
        flashcards: data.filter(flashcard => {
          return flashcard.topic === topic;
        }),
        currentCardIndex: 0,
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar 
          topics={this.state.topics}
          handleTopicSelection={this.handleTopicSelection.bind(this)}
        />
        <Grid>
          <Row>
            <Col xs={6} xsOffset={3}>
              <h3><Label>{this.state.currentTopic}</Label></h3>{' '}
              <MuiThemeProvider>
                <Flashcard 
                  flashcard={this.state.flashcards[this.state.currentCardIndex]}
                  currentCardIndex={this.state.currentCardIndex}
                  totalCards={this.state.flashcards.length}
                  getNextCard={this.getNextCard.bind(this)}
                  getPreviousCard={this.getPreviousCard.bind(this)}
                  deleteCurrentCard={this.deleteCurrentCard.bind(this)}
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


