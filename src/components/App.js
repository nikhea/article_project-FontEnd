import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ArticleList from './articles/ArticleList';
import ArticleForm from './articles/ArticleForm';
import Landing from './articles/Landing';
import ArticleDetails from './articles/ArticleDetails'
import UpdateForm    from './articles/UpdateForm'
import NavBar from './articles/NavBar'
import About from './articles/About';
const App = () => {
	return (
		<Fragment>
			    <NavBar/>
			<Switch>
				{/* <div> */}
					<Route exact path="/" component={Landing} />
					<Route exact path="/articlelist" component={ArticleList} />
					<Route exact path="/newarticle" component={ArticleForm} />
				<Route exact path='/articlelist/:_id' component={ArticleDetails} />
				<Route exact path='/articlelist/update/:_id' component={UpdateForm} />
				<Route exact path='/about' component={About}/>
				{/* </div> */}
			</Switch>
	   </Fragment>
	);
};

export default App;
