var TextAreaCounter = React.createClass({
	propTypes: {
		text: React.PropTypes.string,
	},
	getDefaultProps: function() {
		return {
			text: '',
		};
	},
	
	render: function() {
	return React.createElement('div', {}, 
		React.createElement('textarea',{defaultValue: this.props.text}),
		React.createElement('h3',{},this.props.text.length)
		);
	}
});

var element = React.createElement(TextAreaCounter, {text:'paweł'});

ReactDOM.render(element ,document.getElementById('app2'));
