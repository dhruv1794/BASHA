import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,CardTitle, CardText, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
 constructor(){
   super();
   this.QuestionRender = this.QuestionRender.bind(this);
   this.JumbledGrid = this.JumbledGrid.bind(this);
   this.state = {
     ArrayOfQuestions:[
       "Winter is coming","Holocaust is near","World is a mysterious place","i love lemonade","Chennai is hot and humid", "Bangalore is pleasant",
       "Vladmir Putin is the richest politician","Can virat overtake sachin ?", "Survival of the fittest","Hitler lost world war 2"
     ],
     AnswerGrid:[],
     QuestionGrid:[],
     currentQuestion:0
   }
 }
 HandleJumbledGridClicks(ClickedWord){
   console.log(ClickedWord,'$$$')
   var AnswerGrid = this.state.AnswerGrid;
   AnswerGrid.push(ClickedWord)
   this.setState({AnswerGrid});
 }
 JumbledGrid(){
   
   var words = [];
   words = this.state.ArrayOfQuestions[this.state.currentQuestion].split(' ');
   var QuestionGrid = words.map((i,index)=>{
     return <Button key='index' onClick={()=>this.HandleJumbledGridClicks(i)}>{i}</Button>
   })
   return this.Shuffle(QuestionGrid)
 }
 AnswerRender(){
   var AnswerGrid = this.state.AnswerGrid.map((i)=>{
     return <Button>{i}</Button>
   })
   return AnswerGrid
 }
 QuestionRender(){
   return this.state.ArrayOfQuestions[this.state.currentQuestion]
 }
 Shuffle(QuestionGrid) {
  let ctr = QuestionGrid.length;
  let temp;
  let index;
  while (ctr > 0) {
  index = Math.floor(Math.random() * ctr);
  ctr--;
  temp = QuestionGrid[ctr];
  QuestionGrid[ctr] = QuestionGrid[index];
  QuestionGrid[index] = temp;
  }
  return QuestionGrid;
}
 render() {
  return (
    <div className="App">
      <Row>
        <Col className='col-6 offset-3'>
          <Card className='game-area' body inverse color="warning">
            <CardHeader className='game-header'>Pick the words in order</CardHeader>
              <CardBody>
                <CardTitle className='create-height'>{this.QuestionRender()}</CardTitle>
                <hr/>
                <CardText className='create-height'>
                  
                  {this.AnswerRender()}
                </CardText>
                
              </CardBody>
            <CardFooter className='create-height'>
              {this.JumbledGrid()}
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
    );
  }
}

export default App;
