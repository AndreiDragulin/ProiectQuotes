import React from 'react';
import ReactDOM from 'react-dom';
import RonSwanson from './RonSwanson.jpg';
import './App.css';

class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            Quotes: ''
        };
    }
    
    render(){
        return (
        <div className="App">
          <header className="App-header">
            <img src={RonSwanson} className="App-logo" alt="logo" />
            <div style={{display : 'flex'}}>
            <input value={this.state.Quotes} onChange={this.updateQuotes} id="quotes-id" placeholder="Quotes"/>
            <button id="search-quotes" style={{marginLeft : '2px'}} onClick={this.searchQuotes}>
             Search
            </button>
            </div>
            <div style={{backgroundColor : 'white', marginTop: '1rem', 'color': 'black', padding: '1rem', display: 'none'}} id="quotes-content"></div>
          </header>
        </div>
      );
    }
    
    updateQuotes = (evt) => {
        this.setState({
            Quotes: evt.target.value
        });
    }
    
 searchQuotes = () => {
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        // alert(this.state.Quotes)
        xhr.addEventListener('load', () => {
          // update the state of the component with the result here
          // console.log(xhr.responseText);
          var result = JSON.parse(xhr.responseText);
          //alert(xhr.responseText)
          if(result.length > 0){
              this.setQuotes(result[0]);
          }else{
                ReactDOM.render(<p>No results for current search!</p>, document.getElementById('quotes-id'));
                document.getElementById('quotes-id').style.display = 'block';
          }
        })
        // open the request with the verb and the url
        xhr.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/' + this.state.Quotes );
        // send the request
        xhr.send();
    }
    
    setQuotes(quotes){
       ReactDOM.render(<p>{quotes}</p>, document.getElementById('quotes-content'));
       document.getElementById('quotes-content').style.display = 'block';
    }
}

export default Quotes;