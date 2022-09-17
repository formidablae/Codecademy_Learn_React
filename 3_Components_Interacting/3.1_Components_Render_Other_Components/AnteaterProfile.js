var React = require('react');

var AnteaterProfile = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Annie the Anteater</h2>
                <img src="http://i.imgur.com/ZXWnb.jpg" />
                <p>
                    "I don't just eat ants, ants are more like a lifestyle for me."  - Annie
                </p>
            </div>
        );
    }
});

module.exports = AnteaterProfile;
