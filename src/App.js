import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ReactComponent as ReactLogo } from './assets/Rick_and_Morty.svg';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Search from './components/Search';
import Footer from './components/Footer'
import './styles/App.scss';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  let [searchValue, setSearchValue] = useState('');
  let [activePage, setActivePage] = useState(1);
  let [favoritesList, setFavoritesList] = useState(JSON.parse(localStorage.getItem('Favorites')) || []);
  const setSearch = (value) => {
    setSearchValue((searchValue = `name: "${value}"`));
  };
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Router>
          <div className='header'>
            <Link to='/'>
              <ReactLogo className='header__logo' />
            </Link>
            <Search setSearchValue={setSearch} />
          </div>
          <hr />
          <main>
            <nav className='nav'>
              <ul className='nav__list'>
                <li className='nav__element'>
                  <NavLink
                    exact
                    className='nav__link'
                    activeClassName='nav__link--active'
                    to='/'
                  >
                    All Characters
                  </NavLink>
                </li>
                <li className='nav__element'>
                  <NavLink
                    className='nav__link'
                    activeClassName='nav__link--active'
                    to='/favorites'
                  >
                    Favorites
                  </NavLink>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path='/'>
                <Home
                  searchInput={searchValue}
                  activePage={activePage}
                  setActivePage={setActivePage}
                  favorites={favoritesList}
                  setFavorites={setFavoritesList}
                />
              </Route>
              <Route path='/Favorites'>
                <Favorites
                  favorites={favoritesList}
                  setFavorites={setFavoritesList}
                />
              </Route>
            </Switch>
          </main>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
