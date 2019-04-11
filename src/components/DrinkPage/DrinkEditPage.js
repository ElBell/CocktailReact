import React from "react";

export class DrinkEditPage extends React.Component{
  state = {
    drink:null,
    name:null,
    image:null,
    alcoholic:null,
    instructions:null,
    ingredients:[],
    glass:null
  };

  componentDidMount = async () => {
    await this.getDrink()
  };

  componentWillReceiveProps = async () => {
    await this.getDrink()
  };

  async getDrink() {
    fetch(this.props.match.params.id)
      .then(response => response.json())
      .then(data => this.setState({
        drink: data,
        name: data.name,
        image: data.image,
        alcoholic: data.alcoholic,
        instruction: data.instructions,
        ingredients: data.ingredients,
        glass: data.glass
      }));
  }

  render() {
    if (this.state.drink == null) {
      return <div>Hi there</div>
    } else {
      console.log(this.state.drink);
      return <div>{this.state.name}</div>
    }
  }
}
