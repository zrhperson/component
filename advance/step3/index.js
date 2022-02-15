import {create, Text, Wrapper, Component} from '../../core/create'


class MyComponent extends Component {
    constructor() {
        super()
    }
    render() {
        return (<div>MyComponent - render{this.slot}</div>)
    }
}

let component = (
    <MyComponent>
        MyComponent - child
    </MyComponent>
);


component.mountTo(document.body);

