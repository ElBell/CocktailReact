import * as React from "react";
import {ListPage} from "./ListPage";
import {Loading} from "./Loading";
import {App} from "../App";

export class SearchIngredient extends React.Component{
    state = {
        loading: true,
        limit: false,
        drinks: null,
        ingredients:['water', 'rum']
    };

    componentDidMount = async () => {
        this.getDrinks()
    };


    getDrinks() {
        if (this.state.limit) {
            fetch(App.SITE_URL+ "ingredients/limit/" + this.state.ingredients).then(response => response.json())
              .then(data => this.setState({drinks: data, loading: false}))
        } else {
            fetch(App.SITE_URL+ "ingredients/include/" + this.state.ingredients).then(response => response.json())
              .then(data => this.setState({drinks: data, loading: false}))
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading/>
        }
        return (<ListPage drinks={this.state.drinks}/>)
    }

}
