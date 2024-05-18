import s from './App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={s.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
