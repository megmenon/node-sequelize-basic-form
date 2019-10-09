import React from 'react';
import TeamMembers from '../TeamMember/TeamMembers';
import NewMember from '../TeamMember/NewMember';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="team-grid" />
        <Switch>
          <Route exact path='/' component={TeamMembers} />
          <Route path='/create' component={NewMember} />
        </Switch>
      </div>
    );
  }
}

export default App;
