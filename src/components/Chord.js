import React from 'react';

const Chord = (props) => {
	const styles = {
		chordContainer:{
			height:"100%",
			width:"15%",
			borderWidth:2,
		 	borderRadius: 5,
	  		borderColor:"black",
	  		borderStyle: "solid",
	  		marginRight:"1%"
		},
		imageContainer:{
			height:"95%",
			marginTop:"5%",
			width:"100%"
		},
		image:{
			width:"100%",
			height:"100%"
		}
};
	return (

		<div style={styles.chordContainer}>
			<div style={styles.imageContainer}>
				<img src={props.chord.imgSrc} alt="image" style={styles.image}></img>
			</div>
		</div>
	)
}

export default Chord;