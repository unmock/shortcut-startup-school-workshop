import React from 'react';

const Repository = ({ repo }) => {
  const { name } = repo;
  return (

    <div className="repository">
      <a href={repo.html_url} className="repository__link">
        <div className="repository__title">
          {name}
        </div>
        <div className="repository__content">
          <p>
            Stars:
            { repo.stargazers_count }
          </p>
        </div>
      </a>
    </div>

  );
};

const App = ({ repositories }) => (

  <div className="repositories">
    <div className="repositories__title">
      My GitHub repositories
    </div>
    <div className="repositories__content">
      { repositories.map((repo) => <Repository repo={repo} />)}
    </div>
  </div>
);

export default App;
