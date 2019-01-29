import React {Component} from 'react';

cconst EmailInputs = (props) => {
		return(
			<div className="form-group">
				<div className="email">
				  <input type="email" id="email" placeholder={this.state.emailText} value={this.state.email} onChange={this.handleChange} required="1"/>
				</div>
				<div className="submitBtn">
				  <input type="submit" value="Submit" />
				</div>
			</div>
			)
	}

export default EmailInputs;