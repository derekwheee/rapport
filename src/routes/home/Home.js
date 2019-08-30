const React = require('react');
const { connect } = require('react-redux');
const Classes = require('./Home.scss');

class Home extends React.Component {

    render() {
        return (
            <div className={Classes.home}>
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