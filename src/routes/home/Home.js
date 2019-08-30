const React = require('react');
const { connect } = require('react-redux');
const DuckImage = require('./assets/duck.jpg');
const Classes = require('./Home.scss');

class Home extends React.Component {

    render() {
        return (
            <div>
                <h4>Welcome!</h4>
                <img
                    alt='This is a duck, because Redux!'
                    className={Classes.duck}
                    src={DuckImage}
                />
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