import React, {Component} from "react";
import Toronto from "../static/images/toronto.jpg";

//Class Component
// class App extends Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         )
//     }
// }
// export default App; 

fetch(`${API_URL}toronto`)
.then(result=>result.json())
.then(json => console.log(json));

//functional component
const App = () => (
    <div>
        <h1>Hello Universe!</h1>
        <img src={Toronto} width="200"/>
    </div>
)
export default App;