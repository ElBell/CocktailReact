import React from 'react';

export class SearchBar extends React.Component {
  state = {term: ''};

  onTermChange = (event) => {
    this.setState({term: event.target.value},
      function () {
        this.props.updateDrinks(this.state.term);
      });
  };


  render() {
    return (
      <div className="input-group md-form form-sm form-2 pl-0">
        <input className="form-control my-0 py-1 white" type="text" placeholder="Search" aria-label="Search"
               onChange={event => this.onTermChange(event)}
               value={this.state.term}/>
          <div className="input-group-append">
            <span className="input-group-text white" id="basic-text1"
                  onClick={() => this.setState({term:''})}>
              <i className="far fa-times-circle" aria-hidden="true"/></span>
          </div>
      </div>
    )
  }
}
