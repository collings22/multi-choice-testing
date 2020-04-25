import React, {Component, useState} from 'react';

export default class Question extends Component{
  constructor(props){
      super(props);
      this.state = {questions:this.props};
      // this.checkAnswer = this.checkAnswer.bind(this);
    }

  // checkAnswer = (e, data) => {
    // if(data === e.target.value){
    //   this.setState.score = this.score++;
    // }
    // else{
    //   this.props.parentCallback(0);
    // }
  // }

  // onChange={((e) => this.checkAnswer(e, question.Answer))}
  // onChange={((e) => this.checkAnswer(e, question.Answer))}
  // onChange={((e) => this.checkAnswer(e, question.Answer))}
  // onChange={((e) => this.checkAnswer(e, question.Answer))}

  render(){
    const question = this.state.questions.data
      .map((question) =>
    <div key={question.Id} style={{border:"solid 1px", padding:"10px"}}>
      <h4>{question.Question}</h4>
      <div style={{display:"inline-grid"}}>
        {question.Question !== null ? <label><input type="radio" id={question.Id} style={{marginRight:"8px"}} name={question.Question} value={question.A} />{question.A}</label> : null}
        {question.Question !== null ? <label><input type="radio" id={question.Id} style={{marginRight:"8px"}} name={question.Question} value={question.B} />{question.B}</label>: null}
        {question.Question !== null ? <label><input type="radio" id={question.Id} style={{marginRight:"8px"}} name={question.Question} value={question.C} />{question.C}</label>: null}
        {question.Question !== null ? <label><input type="radio" id={question.Id} style={{marginRight:"8px"}} name={question.Question} value={question.D} />{question.D}</label>: null}
      </div>
    </div>
    ).sort(() => Math.random() - 0.5).slice(0,20);

      return (
          <div style={{background:"gainsboro", marginBottom:"15px"}}>
                {question}
          </div>
      );
  } 

}