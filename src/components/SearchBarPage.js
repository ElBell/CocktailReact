import * as React from "react";
import {ListPage} from "./ListPage";
import { BeatLoader } from 'react-spinners';


export class SearchBarPage extends React.Component{
  state = {
    drinks: null,
    loading: true
  };

  async componentDidMount() {
    fetch("http://localhost:8080/cocktail/drinks/")
      .then(response => response.json())
      .then(data => this.setState({drinks: data, loading: false}));
  }


  render() {
    if (this.state.loading) {
      return(
        <div className='sweet-loading align' style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'}}>
          <BeatLoader sizeUnit={"px"} size={70} color={'#fff'} loading={this.state.loading}/>
        </div>
      )
    } else {
      return <ListPage drinks={this.state.drinks} />
    }
  }
}
