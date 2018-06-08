import React from 'react';
import Autosuggest from 'react-autosuggest';
const styling = {
  container:{
    position:"relative",
    height:"100%",
    width:"100%"
  },
  input:{
    boxSizing:"border-box",
    paddingLeft:10,
    width: "100%",
    height: "100%",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: 300,
    fontSize: 16,
    border: "1px solid #aaa",
    bordeRadius: 4
  },
  inputFocused:{
    outline: "none"
  },
  inputOpen:{
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer:{
    display:"none"
  },
  suggestionsContainerOpen:{
  display: "block",
  position: "absolute",
  top: 51,
  width: "100%",
  border: "1px solid #aaa",
  backgroundColor: "#fff",
  fontFamily: "Helvetica, sans-serif",
  fontWeight: 300,
  fontSize: 16,
  borderBottomLeftRadius:4,
  borderBottomRightRadius: 4,
  zIndex: 2
  },
  suggestionsList:{
  margin: 0,
  padding: 0,
  listStyleType: "none"
  },
  suggestion:{
  cursor: "pointer",
  padding: "10px 20px"
  },
  suggestionHighlighted:{
    backgroundColor:"#ddd"
  }
}
const chords= [
{
	chordName:"C Major",
	symbol:"C",
},
{
	chordName:"C Minor",
	symbol:"Cm",
},
{
  chordName:"C# Major",
  symbol:"C#",
},
{
  chordName:"C# Minor",
  symbol:"C#m",
},
{
  chordName:"Db Major",
  symbol:"Db",
},
{
  chordName:"Db Minor",
  symbol:"Dbm",
},
{
  chordName:"D Major",
  symbol:"D",
},
{
  chordName:"D Minor",
  symbol:"Dm",
},
{
  chordName:"D# Major",
  symbol:"D#",
},
{
  chordName:"D# Minor",
  symbol:"D#m",
},
{
  chordName:"Eb Major",
  symbol:"Eb",
},
{
  chordName:"Eb Minor",
  symbol:"Ebm",
},
{
  chordName:"E major",
  symbol:"E",
},
{
  chordName:"E Minor",
  symbol:"Em",
},
{
  chordName:"F major",
  symbol:"F",
},
{
  chordName:"F Minor",
  symbol:"Fm",
},
{
  chordName:"F# Major",
  symbol:"F#",
},
{
  chordName:"F# Minor",
  symbol:"F#m",
},
{
  chordName:"Gb Major",
  symbol:"Gb",
},
{
  chordName:"Gb Minor",
  symbol:"Gbm",
},
{
  chordName:"G Major",
  symbol:"G",
},
{
  chordName:"G minor",
  symbol:"Gm",
},
{
  chordName:"G# Major",
  symbol:"G#",
},
{
  chordName:"G#m Minor",
  symbol:"G#m",
},
{
  chordName:"Ab Major",
  symbol:"Ab",
},
{
  chordName:"Ab Minor",
  symbol:"Abm",
},
{
	chordName:"A Major",
	symbol:"A",
},
{
  chordName:"A Minor",
  symbol:"Am",
},
{
  chordName:"A# Major",
  symbol:"A#",
},
{
  chordName:"A# Minor",
  symbol:"A#m",
},
{
  chordName:"Bb Major",
  symbol:"Bb",
},
{
  chordName:"Bb Minor",
  symbol:"Bbm",
},
{
  chordName:"B Major",
  symbol:"B",
},
{
  chordName:"B Minor",
  symbol:"Bm",
},
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : chords.filter(chord =>
    chord.chordName.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.symbol;

const renderSuggestion = suggestion => (
  <span>
    {suggestion.chordName}
  </span>
);

class Form extends React.Component{
     state = {
      value: '',
      suggestions: []
    };

  	onChange = (event, { newValue }) => {
   		 this.setState({
   		 	value:newValue,
   		 });
  	};
    onSuggestionsClearRequested = () => {
	    this.setState({
	      suggestions: []
	    });
    };
    onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

	render() {
		const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Enter chord',
      value,
      onChange: this.onChange
    };

		return (
    <div className="col m7 l5 offset-l2 offset-m1 s8" style={{height:"100%",padding:0}}>
		<Autosuggest
        theme={styling}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.props.handleChordAddition}
      />
    </div>
		);
	}
}

export default Form;