//  Project overview and component structure is below:
//  TimersDashboard (green) - Parent Container
//  EditableTimerList (red): Display a list of timer containers
//  EditableTimer (aqua): Display either a timer or a time's edit form
//  Timer (yellow): Display a given timer
//  TimerForm (blue): Display a given timer's edit form
//  ToggleableTimerForm (purple): display a form to create a new timer
//  TimerForm (not displayed): displays a new timer's create form

import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm
            isOpen={true}
            />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
