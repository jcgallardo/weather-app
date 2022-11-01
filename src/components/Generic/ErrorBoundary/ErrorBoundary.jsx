import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // OPCIÓN 1: Si hay un error React llama a esta función, y lo que devuelva lo setea al "state"
  // static getDerivedStateFromError(error) {
  //   return { hasError: true }
  // }

  // OPCIÓN 2: Si hay un error React llama a esta función, y lo que devuelva lo setea al "state"
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    return hasError ? <h1>Ha ocurrido un error...</h1> : this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
