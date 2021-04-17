import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {ReactComponent as ReactLogo} from './assets/Rick_and_Morty.svg';
import Home from './components/Home'
import Favorites from './components/Favorites'
import Search from './components/Search';
import './styles/App.scss';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <div className="header">
            <Link to="/"><ReactLogo className="header__logo"/></Link>
            <Search />
          </div>
          <hr />
          <div>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__element">
                  <Link to="/">All Characters</Link>
                </li>
                <li className="nav__element">
                  <Link to="/about">Favorites</Link>
                </li>
              </ul>
            </nav>
            
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Favorites">
                <Favorites />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
