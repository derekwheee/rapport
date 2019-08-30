const React = require('react');
const T = require('prop-types');
const Header = require('../../components/Header');
const Footer = require('../../components/Footer');
const Navigation = require('../../components/Navigation');
const Classes = require('./styles.scss');

// Pull global styles
require('../../styles/core.scss');

const CoreLayout = ({ children }) => (

    <main className={Classes.container}>
        <Header />
        <Navigation />
        {children}
        <Footer />
    </main>
);

CoreLayout.propTypes = {
    children: T.element.isRequired
};

module.exports = CoreLayout;
