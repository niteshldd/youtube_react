import React, {Component} from 'react';


class SearchBar extends Component {
    constructor (props){
        super(props);
        this.state = { term: '' };
    }
    render(){
        return(
            <div className="search-bar" >
            <input 
            value= {this.state.term}
            onChange={(event) => this.onInputChange( event.target.value)}  /> 
            </div> // we used onChange to get the value on eventchange from vanila javascript
        ) 
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term)
    }

}


export default SearchBar;
