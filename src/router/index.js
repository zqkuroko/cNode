import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Index from "../view/index";
import Book from "../view/book";
import About from "../view/about";
import Details from "../view/details";
import User from "../view/user";

class RouterIndex extends Component {
	render () {
	  return (
      <Switch>
      	<Route path="/" exact render={()=> (
              <Redirect to="/index/all"/>
            )} />
      	<Route path="/index/:id" component={Index}/>
      	<Route path="/book" component={Book}/>
      	<Route path="/about" component={About}/>
      	<Route path="/details/:id" component={Details}/>
      	<Route path="/user/:id" component={User}/>
      </Switch>
	  )
	}
}

export default RouterIndex;