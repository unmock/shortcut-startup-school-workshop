import * as React from 'react';

export default ({ repository, tabIndex }) => {
  const { name } = repository;
  return (
    <div className="repository__wrapper">
      <a href={repository.url} title={`Take me to GitHub repository ${name}`} tabIndex={tabIndex} className="repository__link">
        <div className="repository">
          <div className="repository__title">
            {name}
          </div>
          <div className="repository__content">
            <p>
              Stars:
              { repository.stars }
            </p>
            <p>
              Description:
              { repository.description }
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
