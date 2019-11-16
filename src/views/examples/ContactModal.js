import React, { Component } from "react";
import classes from "./ContactModal.module.css";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

class ContactModal extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", user_email: "", last_name: "", user_phone: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }
  handleToggle() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
    console.log(this.state);
  }
  handleLastNameChange(event) {
    this.setState({
      last_name: event.target.value
    });
    console.log(this.state);
  }
  handleEmailChange(event) {
    this.setState({
      user_email: event.target.value
    });
    console.log(this.state);
  }
  handlePhoneChange(event) {
    this.setState({
      user_phone: event.target.value
    });
    console.log(this.state);
  }
  handleSubmit(event) {
    const templateId = "template_PgO5v3yd";

    this.sendFeedback(templateId, {
      name: this.state.name,
      last_name: this.state.last_name,
      user_phone: this.state.user_phone,
      user_email: this.state.user_email
    });
  }
  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {

    return (
        
      <div className={classes.modal}>
          
        <form className={classes.form}>
            <div className={classes.closeButton} onClick={this.props.modalClose} >X</div>
          <h1>Contact Us</h1>
          <h3>
            Feel free to leave your information, and we will get back to you as
            soon as possible!
          </h3>
          <div className={classes.inputs}>
            <div className={classes.column}>
              {" "}
              <input
                type="text"
                name="name"
                placeholder="First Name"
                required
                onChange={this.handleNameChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={this.handleEmailChange}
                required
              />
            </div>
            <div className={classes.column}>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                onChange={this.handleLastNameChange}
              />

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                onChange={this.handlePhoneChange}
                required
              ></input>
            </div>
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn--submit"
            onClick={(event) => {this.handleSubmit(); this.props.modalClose();}}
          />
        </form>
      </div>
    );
  }
}

export default ContactModal;
