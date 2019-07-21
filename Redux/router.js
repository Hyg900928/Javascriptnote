import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

const Test = () => {
    return <div>Hello world</div>
}


class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Test} />
                </div>
            </Router>
        )
    }
}

export default Root