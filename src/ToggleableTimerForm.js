import React, { Component } from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentWillMount() {
    this.setState({
      isOpen: true,
    });
  }

  handleFormClose() {
    this.setState({ isOpen: false });
  }

  handleFormSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  }

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
          />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic icon'
            onClick={this.handleFormOpen}
            >
            <i className='plus icon'></i>
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
