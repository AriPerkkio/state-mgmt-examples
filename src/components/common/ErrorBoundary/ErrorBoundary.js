import { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidUpdate(prevProps, prevState) {
        const keyChanged = prevProps.errorKey !== this.props.errorKey;
        const errorWasRendered = prevState.hasError && this.state.hasError;

        if (keyChanged && errorWasRendered) {
            this.setState({ hasError: false });
        }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}
