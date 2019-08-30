const React = require('react');
const { connect } = require('react-redux');
const { NavLink } = require('react-router-dom');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const Icons = require('@fortawesome/free-solid-svg-icons');
const Classes = require('./styles.scss');

class Navigation extends React.Component {

    static propTypes = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <nav className={Classes.navigation}>
                <NavLink to='/' activeClassName={Classes.activeLink} exact><FontAwesomeIcon icon={Icons.faTachometerAlt} /> Dashboard</NavLink>
                <NavLink to='/reports' activeClassName={Classes.activeLink}><FontAwesomeIcon icon={Icons.faSnowplow} /> Reports</NavLink>
                <NavLink to='/users' activeClassName={Classes.activeLink}><FontAwesomeIcon icon={Icons.faUsers} /> Users</NavLink>
                <NavLink to='/settings' activeClassName={Classes.activeLink}><FontAwesomeIcon icon={Icons.faCog} /> Settings</NavLink>
            </nav>
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Navigation);