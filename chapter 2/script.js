var Component = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
	},
	
	render: function() {
	return React.createElement('span', {}, 'Mam na imię ' + this.props.name);
	}
});

var element = React.createElement(Component, {name:'paweł'});

ReactDOM.render(element ,document.getElementById('app'));
