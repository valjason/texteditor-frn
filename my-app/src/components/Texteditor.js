import React, { Component } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';
import axios from 'axios';




class Texteditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
          editorState: EditorState.createEmpty()
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState
        });
      }

      handleSubmit(e) {
        e.preventDefault();
    
        const data = {
          content: this.state.editorState
        };

        axios.post('http://localhost:5555/posts', {data})
      .then(res => {
        console.log(data);
      })

    this.setState({editorState: EditorState.createEmpty()})
  }




    myFunction = () => {
        /*let dom = this.Editor = React.createRef();*/
        console.log(this.state.editorState.getCurrentContent().getPlainText());
    }

    
    
	render() {
		return (

		<>
            <button onClick={this.myFunction}>Save</button>
			<Editor
                        editorState={this.state.editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
 
            />
		</>

		); 
	}

}





export default Texteditor;