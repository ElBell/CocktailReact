import React from 'react';

export class SearchBar extends React.Component {
  state = {term: ''};

  onTermChange = (event) => {
    this.setState({term: event.target.value},
      function () {
        this.props.updateDrinks(this.state.term);
      });
  };

  onTermDelete = () => {
    this.setState({term: ''},
      function () {
        this.props.updateDrinks(this.state.term)
      })
  };

  componentDidMount() {
    this.setState({term: this.props.currentTerm})
  }

  render() {
    return (
      <div className="input-group md-form form-md form-2 pl-0" style={{margin:5}}>
        <input className="form-control my-0 py-1 white" type="text" placeholder="Search" aria-label="Search"
               onChange={event => this.onTermChange(event)}
               value={this.state.term}/>
          <div className="input-group-append">
            <span className="input-group-text white" id="basic-text1"
                  onClick={this.onTermDelete}>
              <i className="far fa-times-circle"/></span>
          </div>
        <div className="input-group-append">
            <span className="input-group-text white" id="basic-text1"
                  onClick={this.props.onTermSubmit}>
              Search</span>
        </div>
      </div>
    )
  }
}
