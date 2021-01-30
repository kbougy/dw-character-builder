import React from "react";


class CharacterCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.classes = [
      "Barbarian"
    ]
    this.state = {name: "Jane Doe"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert("Submitted character creation form for: " + this.state.name)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>Class:
          <select>
            {
          </select>
        </label>
        <input type="submit" value="Create character"/>
      </form>
    )
  }
}

export default CharacterCreationForm;
