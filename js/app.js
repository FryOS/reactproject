const title = React.createElement('h1', null, 'hello React');
const image = React.createElement('img', {src: 'http://sourcingelectricals.net/wp-content/uploads/2017/12/Facebook-Logo-PNG-Clipart-copy-700x421.png'});
const subtitle = React.createElement('p', null, 'Библиотека для создания интерфейсов');
const container = React.createElement('div', {className: 'container'},image ,title, subtitle);

ReactDOM.render(container, document.getElementById('root'));
