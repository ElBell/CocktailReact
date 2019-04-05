import * as React from "react";
import { ListItem } from "./ListItem";

//https://github.com/schrodinger/fixed-data-table-2
//https://react.rocks/?q=search
//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
//https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4

//Searchable list https://medium.freecodecamp.org/how-to-build-a-react-native-flatlist-with-realtime-searching-ability-81ad100f6699

export class ListPage extends React.Component {
  state = {
    drinks: null
  };

  async componentDidMount() {
    fetch("http://localhost:8080/cocktail/drinks/")
      .then(response => response.json())
      .then(data => data.sort(compare))
      .then(data => this.setState({drinks: data}));
  }


  render() {
    if (this.state.drinks == null) {
      return <h1>Loading, please wait!</h1>
    } else {
      let listItems = getListItems(this.state.drinks);
      return <div>{listItems}</div>;
    }
  }
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
}

function getListItems(drinks) {
  return drinks.map(drink => {
    return <ListItem key={drink.id} drink={drink} />;
  });
}
