import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';
import './layout.css';
import ThemeContext from '../context/ThemeContext';
import standby from '../../content/assets/standby.png';
import sun from '../../content/assets/sun.png';
import Footer from '../components/Footer';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    header = (
      <h3
        style={{
          marginTop: 0,
          fontWeight: 500,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );

    return (
      <ThemeContext.Consumer>
        {theme => (
          <div
            className={theme.darkMode ? 'dark-mode' : 'light-mode'}
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <div style={{ flex: '1' }}>
              <div
                style={{
                  marginLeft: '10%',
                  marginRight: '10%',
                  maxWidth: rhythm(24),
                  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
              >
                {header}
                <button
                  className="darkmode-switcher"
                  onClick={theme.toggleDarkMode}
                >
                  {theme.darkMode ? (
                    <div>
                      <span className="darkmode-label">Light mode</span>
                      <span className="emoji">
                        ️<img src={sun} alt="Wake Icon" />
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="darkmode-label">Dark mode</span>
                      <span className="emoji">
                        ️<img src={standby} alt="Windows 98 Standby Icon" />
                      </span>
                    </div>
                  )}
                </button>
                {children}
                <hr />
              </div>
            </div>

            <Footer theme />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Layout;
