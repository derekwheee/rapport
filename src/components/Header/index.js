const React = require('react');
const { connect } = require('react-redux');
const T = require('prop-types');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const Icons = require('@fortawesome/free-solid-svg-icons');
const Classes = require('./styles.scss');
const UserFetch = require('../../actions/user');

function UserDropdown(props) {
    return (
        <div className={Classes.dropdown}>
            <button aria-haspopup='true' aria-expanded='false' className={Classes.user}>
                <FontAwesomeIcon icon={Icons.faUser} />
                {props.user.name}
            </button>
            <div className={Classes.menu}>
                <button>Log out</button>
            </div>
        </div >
    );
}

UserDropdown.propTypes = {
    user: T.object.isRequired
};

class Header extends React.Component {

    static propTypes = {
        fetchUser: T.func.isRequired,
        userIsLoading: T.bool.isRequired,
        user: T.object.isRequired
    }

    componentDidMount() {

        this.props.fetchUser();

    }

    render() {
        return (
            <header className={Classes.header}>
                <h1>Rapport</h1>

                {this.props.userIsLoading ? <div /> : <UserDropdown {...this.props} />}
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userIsLoading: state.userIsLoading,
        userHasErrored: state.userHasErrored,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(UserFetch())
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Header);