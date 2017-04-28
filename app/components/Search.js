var React = require('react');
var PropTypes = require('prop-types');

class Search extends React.Component{
  render() {
    return (
      <div className='search-box' style={{flexDirection: this.props.direction, alignItems: this.props.direction==='column' ? 'center' : 'baseline'}}>
        <input placeholder="St. George, Utah"/>
        <button className='btn btn-success'>Get Weather</button>
      </div>
    )
  }
}
Search.defaultProps = {
  directon: 'row'
}

Search.propTypes = {
  direction: PropTypes.string.isRequired
}
module.exports = Search;
