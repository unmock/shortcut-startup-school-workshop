const stylesheet = `

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.repositories {
    margin-top: 1rem;
}

.repositories__title {
    text-align: center;
    font-size: 3rem;
    color: #87CEEB;
}

.repository__wrapper {
    border-style: solid;
    border-radius: 1rem;
    border-color: #87CEEB;
    margin: 1rem;
    padding: 1rem;
    color: #87CEEB;
    text-decoration: none;
    cursor: pointer;
}

.repository__wrapper a:visited {
    color: #87CEEB;
    text-decoration: none;
}

.repository__wrapper a:link {
    color: #87CEEB;
    text-decoration: none;
}

.repository__title {
    font-size: 2rem;
}

`;

export default stylesheet;
