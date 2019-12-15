// custom typefaces
import 'prismjs/themes/prism-okaidia.css';
import 'typeface-inter';
import React from 'react';

import ThemeContext from './src/context/ThemeContext';

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };

    this.toggleDarkMode = () => {
      let darkMode = !this.state.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      this.setState({ darkMode });
    };
  }

  componentDidMount() {
    this.setState({ darkMode: JSON.parse(localStorage.getItem('darkMode')) });
  }

  render() {
    const { children } = this.props;
    const { darkMode } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          darkMode,
          toggleDarkMode: this.toggleDarkMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
// highlight-start
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
// highlight-end
