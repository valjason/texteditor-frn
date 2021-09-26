import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Savebutton from './components/Savebutton.js';
import Texteditor from './components/Texteditor.js';


class App extends Component {
	render() {
		return (

		<>
			<Texteditor/>
		</>

		); 
	}

}





export default App;
