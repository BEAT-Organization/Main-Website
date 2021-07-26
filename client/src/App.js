import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import { Home, ContactUs, Magazine, NotFound, Navbar, Footer } from './modules'
import {Home, Navbar, Footer} from './modules'

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/"> <Home /> </Route>{/*
                <Route path="/ContactUs"> <ContactUs /> </Route>
                <Route path="/Magazine"> <Magazine/> </Route>
                <Route path="*"> <NotFound /> </Route>
                */}
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App
