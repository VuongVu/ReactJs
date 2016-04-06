var React = require('react');
var ListItem = require('./ListItem.jsx');

var items = [
    {
      "id": 1,
      "text": "Love"
    },
    {
      "id": 2,
      "text": "Life"
    },
    {
      "id": 3,
      "text": "Family"
    },
    {
      "id": 4,
      "text": "Friend"
    }
];

var List = React.createClass({
  render: function() {
    var listItems = items.map(function(item) {
      return <ListItem key={item.id} items={item.text} />
    });
    
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
});

module.exports = List;
