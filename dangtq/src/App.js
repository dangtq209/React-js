import React from "react"
import Time from "./components/Time"
import Button from "./components/Button"
import "./App.css"
import store from './redux-setup/store'
import { Provider } from 'react-redux'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div id="main">
                    <div id="title">Automatic Timer</div>
                    <Time />
                    <Button />
                </div>
            </Provider>
        )
    }
}
export default App
