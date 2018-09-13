var TextAreaCounter = React.createClass({
	
	_log: function(methodName, args) {
		console.log(methodName, args);
		},
		componentWillUpdate: function() {
		this._log('componentWillUpdate', arguments);
		},
		componentDidUpdate: function() {
		this._log('componentDidUpdate', arguments);
		},
		componentWillMount: function() {
		this._log('componentWillMount', arguments);
		},
		componentDidMount: function() {
		this._log('componentDidMount', arguments);
		},
		componentWillUnmount: function() {
		this._log('componentWillUnmount', arguments);
		},

	getInitialState: function() {
		return {
			text: this.props.defaultValue,
		};
	},

	propTypes: {
		defaultValue: React.PropTypes.string
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

var element = React.createElement(TextAreaCounter, {defaultValue:'paweł'});

ReactDOM.render(element ,document.getElementById('app2'));

