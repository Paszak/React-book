var GalleryItem = React.createClass({
render: function() {
return React.createElement('h2', {}, 'Pierwszy komponent');
}
});

ReactDOM.render(
	React.createElement(GalleryItem), 
	document.getElementById('app')
	);