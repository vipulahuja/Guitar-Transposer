import React from 'react';
import Chord from './Chord';

const ChordsPrinter=(props)=>{
	const stylesheet = {
		chordsContainer:{
		  boxSizing:"border-box",
		  width:"90%",
		  height: 120,
		  margin:"2% auto",
		  display: "flex",
		  flexDirection: "row",
		  alignItems: "center",
		  justifyContent: "flex-start"
		}
	}
	return(
	<div style={stylesheet.chordsContainer}>
        {props.chordsToPrint.map((chord,i)=><Chord chord={chord} key={i}>{chord}</Chord>)}
    </div>
    );
}


export default ChordsPrinter;