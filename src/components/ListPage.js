import * as React from 'react';
import Media from "react-media";

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
        var accumulatedDrinks = [];
        for(var i in body) {
            accumulatedDrinks.push(body[i]);
        }
        this.setState({ drinks: accumulatedDrinks});
        console.log("State:");
        console.log(this.state.drinks[0].id);
    }

    render() {
        //console.log(this.state.drinks[0]);
        // <li key={drink.id}>{ drink.name }</li>
        return (
            <div>
                <li>Hello</li>
                {this.state.drinks.map((drink) => {
                    return (
                    <li key={drink.id}>{drink.name}</li>
                    )
                })
            }
        </div>
        )
    }
}

//            <div>
//                 {this.state.data.map((drink) => {
//                     return(
//                     <Media>
//                         <img
//                             width={64}
//                             height={64}
//                             className="mr-3"
//                             src={ drink.thumb }
//                             alt="Generic placeholder"
//                         />
//                         <Media.Body>
//                             <h5>{ drink.name }</h5>
//                         </Media.Body>
//                     </Media>
//                     )
//                 })}
//             </div>
