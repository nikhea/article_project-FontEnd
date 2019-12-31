import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ArticleList from './articles/ArticleList';
import ArticleForm from './articles/ArticleForm';
import Landing from './articles/Landing';
import ArticleDetails from './articles/ArticleDetails'
import UpdateForm    from './articles/UpdateForm'
const App = () => {
	return (
		<Fragment>
			<Switch>
				{/* <div> */}
					<Route exact path="/" component={Landing} />
					<Route exact path="/articlelist" component={ArticleList} />
					<Route exact path="/newarticle" component={ArticleForm} />
				<Route exact path='/articlelist/:_id' component={ArticleDetails} />
				<Route exact path='/articlelist/update/:_id' component={UpdateForm}/>
				{/* </div> */}
			</Switch>
	   </Fragment>
	);
};

export default App;
