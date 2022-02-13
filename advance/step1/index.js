// function Create() {
//     console.log(arguments)
// }

/* ---1--- */
let component = <MyComponent id="idx" />;


/* ---2--- */
function MyComponent() {

}
class MyComponent {

}

let component = <MyComponent id="idx" />;




/* ---3--- */
class Parent {

}
class Child {
    
}

let component = (
    <Parent id="idx">
        <Child></Child>
        <div></div>
    </Parent>
);