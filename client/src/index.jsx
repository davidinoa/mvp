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
    if (confirm('Are you sure you want to delete this flashcard?')) {
      $.ajax({
        url: '/flashcards',
        method: 'DELETE',
        data: currentCard
      })
        .done(() => {
          this.fetchAllCards();
        });
    }
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
      <div style={{backgroundImage: 'url("https://i.imgur.com/CRbHYjg.png")'}}>
        <NavBar 
          topics={this.state.topics}
          handleTopicSelection={this.handleTopicSelection.bind(this)}
        />
        <div 
          id="home"
          className="jumbotron jumbotron-fluid"
          style={{
            height: 'calc(90vh)',
            marginBottom: '100px',
            backgroundImage: 'url("https://static.pexels.com/photos/416346/pexels-photo-416346.jpeg")',
            backgroundSize: 'cover'
          }}
        >
          <div className="container">
            <h1 
              className="display-4" 
              style={{marginTop: '200px', marginLeft: '120px' }}
            >
              Flashcard-Maker
            </h1>
            <h2 
              className="lead" 
              style={{fontSize: '30px', marginLeft: '120px'}}
            >
              Create your own flashcards!
            </h2>
          </div>
        </div>
        <Grid>
          <Row id="study" style={{height: 'calc(90vh)'}}>
            <Col xs={10} xsOffset={1} style={{marginTop: '100px'}}>
              <h2><Label>{this.state.currentTopic}</Label></h2>{' '}
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
          <Row id="create-form" style={{height: 'calc(90vh)'}}>
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


