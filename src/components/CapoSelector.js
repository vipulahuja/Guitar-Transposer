import React from 'react';

const CapoSelector=(props)=>{
const stylesheet = {
  selectFret:{
  height:"100%",
  borderRadius: 3,
  borderColor: "black",
  borderWidth: 1,
  color: "grey",
  padding: 6,
  display:"block"
  },
  fretChange:{
    height:"100%"
  }
}
const arr=[0,1,2,3,4,5,6,7,8,9,10,11,12];
const fretChangeHandler=(event)=>{
	const fretNo=event.target.value.length===5?parseInt(event.target.value.charAt(4),10):10+parseInt(event.target.value.charAt(5),10);
	props.handleFretChange(fretNo);
}
console.log(props.fret);
return (
  <div style={{marginLeft:"5%",height:"100%",padding:0}} className="col m3 l2 offset-l1 offset-m1 s3 offset-s1 flow-text">
      <p>{props.fret}</p>
      <form style={stylesheet.fretChange}>
        <select style={stylesheet.selectFret} name="CapoSelector" onChange={fretChangeHandler} id="SelectElement">
          {arr.map((number,i)=><option key={i} value={"fret"+number} className="flow-text">{"fret"+number}</option>)}
        </select>
      </form>
  </div>
  );
}	

export default CapoSelector;