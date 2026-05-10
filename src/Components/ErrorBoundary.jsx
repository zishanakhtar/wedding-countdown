import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Music Player Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null; // Silently fail so the invitation still works without music
    }
    return this.props.children;
  }
}

export default ErrorBoundary;