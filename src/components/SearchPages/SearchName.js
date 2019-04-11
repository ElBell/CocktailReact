import * as React from "react";
import {ListPage} from "../DrinkList/ListPage";
import {Loading} from "../Utils/Loading";

export class SearchName extends React.Component{

  state = {
    drinks: null,
    loading: true
  };


  componentDidMount = async () => {
    const drinks = await this.props.drinks;
    this.setState({drinks: drinks, loading:false})
  };

  render() {
    if (this.state.loading) {
      return <Loading/>
    }
    return (
      <div>
        <ListPage reset={this.props.reset} drinks={this.state.drinks}/>
      </div>
    )
  }
}
