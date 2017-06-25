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


import uuid from 'uuid';
import helpers from './helpers';

class TimersDashboard extends Component {
    state = {
      timers: [
        {
          title: 'Practice react',
          project: 'Create timer app',
          id: uuid.v4(),
          elapsed: 5456099,
          runningSince: Date.now(),
        },
        {
          title: 'Practice Python',
          project: 'Create Flask app',
          id: uuid.v4(),
          elapsed: 595835,
          runningSince: null,
        },
      ],
    };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };

  createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
           />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
            />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
