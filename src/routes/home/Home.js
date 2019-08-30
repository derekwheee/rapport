const React = require('react');
const { connect } = require('react-redux');

class Home extends React.Component {

    render() {
        return (
            <div>
                <h4>Welcome!</h4>
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);