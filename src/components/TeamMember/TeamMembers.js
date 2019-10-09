import React, {Component} from 'react';
import TeamMember from './TeamMember';
import axios from 'axios';
import { Add, AddSymbol } from '../styled-components';

class TeamMembers extends Component{
    constructor(props){
        super(props)
        this.state = {
            team: [],
            loading: true
        }
    }
    async componentDidMount() {
        try {
          await this.fetchInitialData();
        } catch (error) {
          // try again after half a second if fails due to race condition
          console.log('retrying initial data request...');
          setTimeout(async () => {
            await this.fetchInitialData();
          }, 500);
        }
      }
    
    async fetchInitialData() {
        const response = await axios.get('/team');
        this.setState({
          team: response.data,
          loading: false
        });
    }
    render(){
        if (this.state.loading) {
            return <h1>Loading...</h1>;
          }      
        return(
            <div className="app">
                <div className="team-grid" >
                {this.state.team.map(member => (
                    <TeamMember
                    key={member.id}
                    name={`${member.firstName} ${member.lastName}`}
                    title={member.title}
                    photoUrl={member.photoUrl}
                    story={member.story}
                    favoriteColor={member.favoriteColor}
                    />
                ))}
                </div>
                <TeamMember
                  heading={'Add new team member!'}
                  add={
                      <Add href="/create">
                        <AddSymbol>
                             +
                        </AddSymbol>
                      </Add>
                      }
                />
            </div>
        )
    }
}


export default TeamMembers