import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import HomePage from './pages/Main';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import Auth from './pages/Auth';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import FoundUsers from './pages/Main/containers/Users/FoundUsers';
import UserProfile from './pages/Main/containers/Users/UserProfile';
import CurrentUserProfile from './pages/Main/containers/CurrentUser/CurrentUserProfile/index.jsx';
import CurrentUserSettings from './pages/Main/containers/CurrentUser/CurrentUserSettings';
import FollowingAndFollowers from './pages/Main/containers/Users/FollowingAndFollowers';
import UsersFeed from './pages/Main/containers/Feed'
import CreationPost from './pages/Main/containers/Posts/CreationPost';


const App = () => {


  return (
    <Provider store={store}>
    <Router>
   

    <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/auth' component={Auth}/> 
            <Route exact path='/auth/login' component={Login}/> 
            <Route exact path='/auth/registration' component={Registration}/>
            <Route exact path='/users' component={FoundUsers}/>
            <Route exact path='/users/current' component={ CurrentUserProfile }/>
            <Route exact path='/users/current/settings' component={ CurrentUserSettings }/>

            <Route exact path='/users/:userId' render={({match})=> {
              const { userId } = match.params;
         
              return <UserProfile userId = {userId}/>
            }}/> 
             <Route exact path='/users/followersAndFollowing/:userId' render={({match})=> {
              const { userId } = match.params;
         
              return <FollowingAndFollowers userId = {userId}/>
            }}/> 
            <Route exact path='/posts/feed' component={ UsersFeed }/>
            <Route exact path='/posts/creating' component={ CreationPost }/>
  
  </Switch>
    </Router>
    </Provider>
  );
}

export default App;
