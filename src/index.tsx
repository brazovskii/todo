import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Navigator from "./components/Navigator/Navigator";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Provider store={store}>
            <Navigator/>
        </Provider>
    </BrowserRouter>,
    rootElement
);
