const React = require('react');
const { connect } = require('react-redux');

class Counter extends React.Component {

    render() {
        return (
            <div />
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Counter);