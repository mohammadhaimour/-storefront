
import { Provider } from "react-redux";
import mystore from './store/index';
import ReactDOM from "react-dom";
import App from "./app";

const rootEl = document.getElementById("root");
function Main() {
    return (

        <Provider store={mystore}>
            <App />
        </Provider>




    )
}
// either <div> or <App />
// ReactDOM.render(<div>hello</div>, rootEl);
// instead of having <div>hello</div> we gonna put the App.js it will be like (replace line 2 with this)
ReactDOM.render(<Main />, rootEl);
