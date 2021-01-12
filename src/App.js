import styles from './App.module.css';

function App() {
  return (
    <div>

      <div className={styles.header}>
        <p>404 NOT FOUND</p>
      </div>

      <div className={styles.content}>
        <img  src={'Scarecrow.png'} width="500em"/>

        <div className={styles.description} >
          <p
            style={{fontWeight: "bold", fontSize: "4em", marginBottom: "0.1em"}}
          >
            I have bad news for you 
          </p>
          <p
            style={{color: 'gray', fontSize: "1.5em", width:"16em"}}
          >
            The page you are looking for might be removed or is temporarily unavailable
          </p>
          
          <button className={styles.btn}> 
            BACK TO HOMEPAGE
          </button>
        </div>

      </div>

      <div>
        <p className={styles.footer}>
          fsocualaya @ <a href="https://devchallenges.io/">DevChallenges.io</a> 
        </p>
      </div>

    </div>
  );
}

export default App;
