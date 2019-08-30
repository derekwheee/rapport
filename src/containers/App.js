const React = require('react');
const { connect } = require('react-redux');
const T = require('prop-types');
const ValidateTokenFetch = require('../actions/token');

const { Router: StrangeRouter } = require('strange-router');
const Provider = require('react-redux').Provider;

class App extends React.Component {

    static propTypes = {
        history: T.object.isRequired,
        routes: T.array.isRequired,
        store: T.object.isRequired,
        isLoading: T.bool.isRequired,
        hasErrored: T.bool.isRequired,
        validateToken: T.function.isRequired,
    }

    componentDidMount() {
        this.props.validateToken();
    }

    render() {

        const {
            store,
            routes,
            history,
            isLoading,
            hasErrored
        } = this.props;

        if (isLoading) {
            return (
                <div>Loading...</div>
            );
        }

        if (hasErrored) {
            return (
                <div>Something went wrong</div>
            );
        }

        return (
            <Provider store={store}>
                <div style={{ height: '100%' }}>
                    <StrangeRouter
                        history={history}
                        routes={routes} />
                </div>
            </Provider>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.validateTokenIsLoading,
        hasErrored: state.validateTokenHasErrored,
        isTokenValid: state.isTokenValid
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        validateToken: () => dispatch(ValidateTokenFetch())
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);