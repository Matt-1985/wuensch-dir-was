import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';
import Wishlist from './pages/Wishlist';
import Welcome from './pages/Welcome';

// const logoSpin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Wrapper = styled.div`
//   text-align: center;

//   header {
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
//   }

//   header img {
//     height: 40vmin;
//     pointer-events: none;
//   }

//   @media (prefers-reduced-motion: no-preference) {
//     header img {
//       animation: ${logoSpin} infinite 20s linear;
//     }
//   }
// `;

// const Link = styled.a`
//   color: #61dafb;
// `;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Welcome title="Matti" />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/wishlist">
          <Wishlist />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
