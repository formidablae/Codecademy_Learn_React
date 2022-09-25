import React from 'react';

export class Child extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Hey my name is {this.props.name}!
                </h1>
                <select id="great-names">
                    <option value="Frarthur">
                        Frarthur
                    </option>

                    <option value="Gromulus">
                        Gromulus
                    </option>

                    <option value="Thinkpiece">
                        Thinkpiece
                    </option>
                </select>
            </div>
        );
    }
}
