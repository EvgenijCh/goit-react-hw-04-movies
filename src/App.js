import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader/Loader";
import Container from "./components/Container";
import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.css";

const HomePage = lazy(() =>
  import("./components/HomePage/HomePage"),
);
const MoviesPage = lazy(() =>
  import(
    "./components/MoviesPage/MoviesPage" ),
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage/MovieDetailsPage"),
);

export default function App() {
  return (
    <Container>
      <header className={styles.header}>
        <Navigation />
      </header>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}


