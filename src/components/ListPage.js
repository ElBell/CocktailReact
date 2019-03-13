import * as React from 'react';
import Media from "react-bootstrap/Media";

//https://github.com/schrodinger/fixed-data-table-2
//https://react.rocks/?q=search
//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
//https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4

//Searchable list https://medium.freecodecamp.org/how-to-build-a-react-native-flatlist-with-realtime-searching-ability-81ad100f6699

export class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        };
    }

    onLearnMore = (drink) => {
        //this.props.navigation.navigate('Details', { ...drink });
    };

    async componentDidMount() {
        const url = 'http://localhost:8080/cocktail/drinks/';
        const response = await fetch(url);
        const body = await response.json();
        let accumulatedDrinks = [];
        for(let i in body) {
            accumulatedDrinks.push(body[i]);
        }
        accumulatedDrinks.sort(compare);
        this.setState({ drinks: accumulatedDrinks});
    }

    render() {
        return (
            <div style= {{backgroundColor: "#4d0000"}}>
                {this.state.drinks.map((drink) => {
                    return (
                        <div key = {drink.id} style = {listBorder}>
                        <Media key = {drink.id}>
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src= {drink.thumb}
                                alt="Generic placeholder"
                             />
                            <Media.Body>
                                <h5>{ drink.name }</h5>
                            </Media.Body>
                        </Media>
                        </div>
                    )
                })
            }
        </div>
        )
    }
}

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

const listBorder = {
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: "3px",
    borderBottomStyle: "solid"
};

