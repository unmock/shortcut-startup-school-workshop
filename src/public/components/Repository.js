import * as React from 'react';

export default ({ repository }) => {
  const { name } = repository;
  return (
    <div className="repository">
      <a href={repository.html_url} className="repository__link">
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
