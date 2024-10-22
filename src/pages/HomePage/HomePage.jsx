import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          <span>Phonebook</span> Welcome
          <span role="img" aria-label="Greeting icon">
            🖐️
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
