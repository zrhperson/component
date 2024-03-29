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
        MyComponent - Parent
        <MyComponent>child1</MyComponent>
        <MyComponent>child2</MyComponent>
        <div>child3<div>child3-child1<div>child3-child1-child1<div>child3-child1-child1-child1</div></div></div></div>
    </MyComponent>
);


component.mountTo(document.body);

