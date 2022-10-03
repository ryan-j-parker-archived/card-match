import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
// import Header from './Header';
import { getUser } from './services/auth';
import Chatroom from './Chatroom';

function App() {

  const currentUser = getUser();
  // const [user, setUser] = useState(currentUser);



  return (
    <>
      <div className="App">
        {/* <Header user={user} setUser={setUser} /> */}
        <Switch>
          <Route path="/auth/:type" component={Auth} />
          <Route path="/chatroom" component={Chatroom} />
          <Route exact path="/">
            {/* {!user && <Redirect to="/auth/sign-in" />}
            {user && <Redirect to="/chatroom" />} */}
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;