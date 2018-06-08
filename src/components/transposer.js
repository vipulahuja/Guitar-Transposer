import React, { Component } from 'react';
import ChordsPrinter from './ChordsPrinter';
import InputForm from './InputForm';
import CapoSelector from './CapoSelector';
import FlatOrSharp from './FlatOrSharp'
import CmajI from '../assets/chordsImages/Cmaj.png';
class Transposer extends Component {
  
  static Scale=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  constructor(){
    super();
    this.state = {
    chordsToBeTransformed:[],
    transformedChords:[],
    fretNo:0,  
    };
    this.imagesUrl = [
      {
        symbol:"C",
        Url:CmajI
      },
    ]
    this.stylesheet = {
      appContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      formsContainer:{
          width: "90%",
          height: 60, 
      },
      chordBox:{
        width:"100%",
        marginTop:30
      }
    }
  }
  mapChordToImage = (symbol) => {
    console.log(symbol);
    return this.imagesUrl.find((imageUrl)=>imageUrl.symbol===symbol);
  }
  
  chordTransformHelper = (chordSymbol) => {
        if(this.state.fretNo===0)
          return {symbol:chordSymbol,imgSrc:null};
        let temp = chordSymbol.slice(0,2)
        if(temp.charAt(1)==='b')
        {
          temp = String.fromCharCode(temp.charCodeAt(0)-1) + "#";
        }
        console.log(temp);
        let temp1 = Transposer.Scale.indexOf(temp)-this.state.fretNo;
        console.log(temp1);
        console.log(Transposer.Scale[temp1>=0?temp1:Transposer.Scale.length-Math.abs(temp1)]);
        return {symbol:Transposer.Scale[temp1>=0?temp1:Transposer.Scale.length-Math.abs(temp1)].concat(chordSymbol.indexOf('m')!==-1?"m":""),imgSrc:null};
  };
  
  handleFretChange=(fretNo)=>{
   
    this.setState({
      transformedChords:this.state.chordsToBeTransformed.map(chord=>{
        let temp=Transposer.Scale.indexOf(chord.symbol.slice(0,1))-fretNo;
        return {symbol:Transposer.Scale[temp>=0?temp:Transposer.Scale.length-Math.abs(temp)].concat(chord.symbol.slice(1)!==null?chord.symbol.slice(1):""),imgSrc:null};
      }),
      fretNo:fretNo,
    });
  
  };
  
  handleChordAddition=(event,{ suggestionValue })=>{  
    this.setState(prevState=>{
      return {
              chordsToBeTransformed:prevState.chordsToBeTransformed.concat({symbol:suggestionValue,imgSrc:null}),
              transformedChords:prevState.transformedChords.concat(this.chordTransformHelper(suggestionValue)),
             };
        });
  };
 
  render(){
    return (
        <div style={this.stylesheet.appContainer}>
          <div className="retro">Guitar Transposer</div>
          <div style={this.stylesheet.formsContainer} className="row formContainer">
           <InputForm handleChordAddition={this.handleChordAddition}/>
           <CapoSelector handleFretChange={this.handleFretChange}/>
           <FlatOrSharp/>
          </div>
          <div style={this.stylesheet.chordBox}>
           <ChordsPrinter chordsToPrint={this.state.chordsToBeTransformed}/>
           <ChordsPrinter chordsToPrint={this.state.transformedChords}/>
          </div>
        </div>
      );
  }
}

export default Transposer;
