import React from 'react';

const Content = (props) => {
	const styles = {
		contentContainer:{
			boxSizing:"content-box",
			padding:"2%",
			margin:"0 2%",
			height:"100%",
			display:"flex",
			flexDirection:"column",
		},
		actualContent:{
			height:"70%",
			width:"100%",
			lineHeight: "22px",
		    fontSize: 20,		    /* word-spacing: 1px; */
		    textAlign:"center",  
		},
		buttonContainer:{
			height:"30%",
			width:"100%",
			textAlign:"center"
		}
	}
	function clickHandler(){
		props.clickHandler(props.pageToBeShowed);
	}
	return (
		<div style={styles.contentContainer} className="col m5 s12 card grey lighten-2 z-depth-2">
			<div style={styles.actualContent}> Click The Below Button To Transpose Your Chords Easily By Fret No.</div>
			<div style={styles.buttonContainer}><a onClick={clickHandler} className="btn-large">Click Here</a></div>
		</div>
	);
}

export default Content;