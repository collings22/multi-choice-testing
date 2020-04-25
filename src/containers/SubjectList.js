import React, {Component} from 'react';
import Question from '../components/Question';
import EndTestButton from '../components/EndTestButton';

export default class SubjectList extends Component{
  constructor(props){
      super(props);
      this.state = {
        subjects: this.props.data, 
        selected: null,
      };


  }

  changeSelected = (data) => {
    this.setState({selected: data.target.textContent})
  }

  // updateScore = (data) => {
  //   this.setState({: data.target.textContent})
  // }


  render(){

    const topics = this.state.subjects.map((topics) =>  
      <div key={topics.Id}  style={{border:"solid 1px", padding:"10px"}}>
        <h3 style={this.state.selected === topics.Subject ? {color:"red"} : {color:"black"} } onClick={this.changeSelected}>{topics.Subject}</h3>
        {this.state.selected === topics.Subject ? 
          <div>
            <Question data={topics.Questions} />
            <EndTestButton data={topics}></EndTestButton>
          </div> 
        : null}

      </div>
      );

      return (
        <div>
            {topics}        
        </div>



      );
  } 

}