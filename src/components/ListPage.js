import * as React from 'react';


//https://github.com/schrodinger/fixed-data-table-2
//https://react.rocks/?q=search
//<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
//https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4

//Searchable list https://medium.freecodecamp.org/how-to-build-a-react-native-flatlist-with-realtime-searching-ability-81ad100f6699

export class ListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: []
        };
    }
    onLearnMore = (drink) => {
        //this.props.navigation.navigate('Details', { ...drink });
    };

    async componentDidMount() {
        const url = 'http://localhost:8080/cocktail/drinks/';
        //fetch('http://localhost:8080/cocktail/drinks/').then(response => response.json()).then(data => console.log(data));
        this.setState({ loading: true });
        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response.results,
                    loading: false
                });
            });
        const response = await fetch('http://localhost:8080/cocktail/drinks/');
        const body = await response.json();
        this.setState({ drinks: body})
    }


    render() {
        return(
            <ScrollView>
                <h2>Drinks List</h2>
                <FlatList
                    data = {this.state.drinks}
                    renderItem = {({ item }) => (
                    <ListItem
                        roundAvatar
                        title = { item.name }
                        />
                    )}
                />
            </ScrollView>
        );
    }
}