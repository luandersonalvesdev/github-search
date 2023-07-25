import PropTypes from 'prop-types';
import { GithubUserContextProvider } from './context/GithubUserContext';
import { CurrentSearchContextProvider } from './context/CurrentSearchContext';
import './globals.css';

export const metadata = {
  title: 'Github Search',
  description: 'stay on top of everything from your favorite github profiles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GithubUserContextProvider>
          <CurrentSearchContextProvider>
            {children}
          </CurrentSearchContextProvider>
        </GithubUserContextProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
