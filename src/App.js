import React from 'react';
import SubjectList from './containers/SubjectList';
import './App.css';
import questions from './data/questions.json';

function App() {
  return (
    <div className="App">
      <SubjectList data={questions}></SubjectList>
    </div>
  );
}

export default App;
