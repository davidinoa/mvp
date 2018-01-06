import React from 'react';

const CreateForm = () => (
  <div style={{marginTop: 100}}>
    <h2>New Flashcard</h2>
    <form action="/flashcards" method="post">
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Topic"
          name="topic"
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Question"
          name="question"
        />
      </div>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Answer" 
          name="answer"/>
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  </div>
);

export default CreateForm;