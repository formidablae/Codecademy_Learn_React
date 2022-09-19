// A component class written in the usual way:
export class MyComponentClass extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
    return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
);
