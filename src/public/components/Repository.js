import * as React from 'react';

export default ({ repository, tabIndex }) => {
  const { name } = repository;
  return (
    <div className="repository">
      <a href={repository.html_url} title={`Take me to GitHub repository ${name}`} tabIndex={tabIndex} className="repository__link">
        <div className="repository__title">
          {name}
        </div>
        <div className="repository__content">
          <p>
              Stars:
            { repository.stargazers_count }
          </p>
        </div>
      </a>
    </div>
  );
};
