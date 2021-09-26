import React, { Component } from 'react';

class Savebutton extends Component {

    myFunction = () => {
        console.log("Hello world!");
    }


	render() {
		return (

		<>

			 <button onClick={this.myFunction}>Save</button> 
		</>

		); 
	}

}





export default Savebutton;