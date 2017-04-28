var React = require('react');
var Search = require('./Search');
var PropTypes = require('prop-types');

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="main-header">
          <h1>Main Header</h1>
          <Search />
        </div>
        <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1 className='header'>Enter a City and State</h1>
          <Search direction='column'/>
        </div>
      </div>
    )
  }
}

module.exports = App;
