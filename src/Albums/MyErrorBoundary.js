import React from 'react';

class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: '',
    info: ''
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);

  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return <>
        <div className="card">
          <div className="card-body">
          {this.state.errorMessage}
          </div>
        </div>
       
      </>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;