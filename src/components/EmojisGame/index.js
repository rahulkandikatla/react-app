import React from 'react';
import Navbar from './Navbar/index.js';
import EmojiCard from './EmojiCard/index.js';
import {Div, Wrapper, Body} from './styledComponents.js';
import LosePage from './LosePage/index.js';
import WonPage from './WonPage/index.js';


class EmojisGame extends React.Component{
    state={
            emojis:[],
            score:0,
            topScore:0,
            gameState:'PLAYING',
            selectedTheme:'Light',
         }  
     componentDidMount=()=>{
            const emojisList=this.getEmojis();
            this.setState({
                emojis:emojisList,
            })
     } 
     getEmojis=()=>{
         const expressionsList=['Exploding Head','Grinning Face with Sweat', 'Smiling Face with Heart-Eyes','Smirking Face','Thinking Face', 'Winking Face','Grinning Face','Crying Face','Astonished Face', 'Face with Tears of Joy','Star-Struck','Winking Face with Tongue']
         return(expressionsList.map((expression,index)=>{
            return({id:index,
            image:`https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${index+1}.png`,
            isClicked:false,
            name:expression,
           })}));
     }

     onEmojiClick=(object)=>{
         const {emojis,topScore,score}=this.state;
         let stateOfGame="PLAYING";
       if(object.isClicked){
           stateOfGame="LOSE";
           this.setState({
            gameState:stateOfGame,
           })
       }
       else{
           const currentScore=this.incrementScore();
           console.log(currentScore);
           if(currentScore==emojis.length){ stateOfGame="WON"};
        object.isClicked=!object.isClicked;
        let newList=emojis.filter((eachObject)=>eachObject.id!==object.id)
        newList.push(object);
        this.setState({
            emojis:newList,
            gameState:stateOfGame,
        })
        
        this.shuffleEmojis(this.state.emojis)
       }
     }
     
     shuffleEmojis=(list)=>{
        let shuffledList=[];
        while(list.length>0){
            const each=list[Math.floor(Math.random()*list.length)];
            let index=list.indexOf(each)
            shuffledList.push(each);
            list.splice(index,1);
        }
        this.setState({
            emojis:shuffledList,
        })
     }
     incrementScore=()=>{
        let score=this.state.score;
        score++;
        this.setState({
            score:score
        })
        return score;
     }
     onPlayAgainClick=()=>{
        this.resetGame();
        this.shuffleEmojis(this.state.emojis);

     }
     resetGame=()=>{
        const {emojis, score}=this.state;
        let newEmojisList=emojis.map(eachEmojiObject=>eachEmojiObject.isClicked=false);
        const newTopScore=this.setTopScore(score);
        this.setState({
           emojis:newEmojisList,
           score:0,
           topScore:newTopScore,
           gameState:'PLAYING',
        })
     }
     setTopScore=(currentscore)=>{
       const {topScore}=this.state;
       if(currentscore > topScore) return currentscore;
       else return topScore
     }
     onChangeTheme=()=>{
         const {selectedTheme}=this.state;
          let presentTheme;
          if(selectedTheme==="Light") presentTheme="Dark";
          else presentTheme="Light";
          this.setState({selectedTheme:presentTheme});
     }
     render(){
         const {score, topScore, selectedTheme, gameState}=this.state;
        
        if (gameState==='PLAYING'){
         return(
             <Div>
              <Navbar score={score} topScore={topScore} selectedTheme={selectedTheme} onChangeTheme={this.onChangeTheme} />
              <Wrapper selectedTheme={selectedTheme}>
               <Body selectedTheme={selectedTheme}>{this.state.emojis.map((eachObject)=><EmojiCard key={eachObject.id} object={eachObject} selectedTheme={selectedTheme} click={this.onEmojiClick}  />)}</Body>
              </Wrapper>
             </Div> 
         )
        }
        else if(gameState==='LOSE'){
            return (
            <Div>
            <Navbar score={score} topScore={topScore} selectedTheme={selectedTheme} onChangeTheme={this.onChangeTheme} />    
            <Wrapper selectedTheme={selectedTheme}>
            <LosePage selectedTheme={selectedTheme}  score={score} playButtonClick={this.onPlayAgainClick} />
            </Wrapper>
            </Div>)
        }
        else return(
            <Div>
            <Navbar  score={score} topScore={topScore} selectedTheme={selectedTheme} onChangeTheme={this.onChangeTheme} />
            <Wrapper selectedTheme={selectedTheme}>
            <WonPage selectedTheme={selectedTheme}  score={score} playButtonClick={this.onPlayAgainClick} />
            </Wrapper>
            </Div>)
     }
}

export default EmojisGame;