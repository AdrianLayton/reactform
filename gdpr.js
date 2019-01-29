import React {Component} from 'react';

class EmailInputs extends Component {
	constructor(props) {

	}
	render() {
		return(
			<div className="gdpr">
				<div><input id="gdpr" name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} /></div>
				<div>
				  <label htmlFor="gdpr">
				    <span className="aw">I agree to receive information from</span> <span className="aw">Discovery Communications in accordance</span> <span className="aw">with the following <a href="https://www.google.com/" >Privacy Policy</a></span>
				  </label>
				</div>
			</div>
			)
	}
}

export default EmailInputs;