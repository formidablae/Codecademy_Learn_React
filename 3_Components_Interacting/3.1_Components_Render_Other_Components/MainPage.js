var React = require('react');
var ReactDOM = require('react-dom');
var AnteaterProfile = require('./AnteaterProfile');

var MainPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Welcome to Anteater Towne!!!</h1>
                <AnteaterProfile />
                <footer>
                    To view more anteater profiles just like this one, sign up for an account!
                </footer>
            </div>
        );
    }
});

ReactDOM.render(
    <MainPage />,
    document.getElementById('app')
);
