import React, {Component} from 'react';

export default class EndTestButton extends Component{
  constructor(props){
      super(props);
      this.state = {questions: this.props.data.Questions, subject: this.props.data.Subject};

  }

  calculateScore = () => {
    let score = 0;
    var radios = document.getElementsByTagName('input');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type === "radio" && radios[i].checked ) {
          let d1 = this.state.questions;

          var QA =  d1.filter(function(obj) {
            return Number(obj.Id) === Number(radios[i].id);
          });

          score += radios[i].value === QA[0].Answer ? 1 : 0;
        }
    }

    let result = ((score / 3)*100).toString().substr(0,4).replace(".0","") + "%";
    let date = new Date();
    window.alert("Subject: " + this.state.subject +
    "\n\nDate: " + date.toLocaleDateString() +
    "\n\nTimestamp: " + date.toLocaleTimeString() + 
    "\n\nScore: " + result);
  }

  render(){
      return (
        <button className="btn btn-primary" onClick={this.calculateScore}>End Test</button>
      );
  } 

}