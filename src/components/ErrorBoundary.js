import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };

    }

    static getDerivedStateFromError(error) {
        //updated state so the next render will show the fallback UI
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        //log error to error logging service
    }

    render() {
        if (this.state.hasError) {
            return this.props.children
        }

        return this.props.children;
    }

}

export default ErrorBoundary;