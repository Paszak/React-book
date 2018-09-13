var TextAreaCounter = React.createClass({
	getInitialState: function() {
		return {
			text:this.props.text,
		};
	},

	propTypes: {
		text: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			text: '',
		};
	},
	
	handleChange: function(e) {
		this.setState({
			text: e.target.value,
		});
	},

	render: function() {
		return React.createElement('div', {}, 
			React.createElement('textarea',
				{
					defaultValue: this.state.text,
					onChange: this.handleChange,
				}),
			React.createElement('h3',{},this.state.text.length)
			);
		}
	});

var element = React.createElement(TextAreaCounter, {text:'paweł'});

ReactDOM.render(element ,document.getElementById('app2'));
