import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
  render() {
    return (
      <div id='timers'>
        <EditableTimer
          title='Learn React'
          project='Web Domination'
          elapsed='9896040'
          runningSince={null}
          editFormOpen={false}
          />
        <EditableTimer
          title='Learn extreme Python'
          project='World Domination - Artificial Intelligence'
          elapsed='538573'
          runningSince={null}
          editFormOpen={true}
          />
      </div>
    );
  }
}

export default EditableTimer;
