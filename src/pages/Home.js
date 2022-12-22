import '../styles/main.css';

import Header from "../component/header/Header";

const Home = () => {
  return ( <>
  <Header />
  <main className="section">
      <div className="container">

              <ul className="content-list">
                  <li className="content-list__item">
                      <h2 className="title-2">Front-end</h2>
                      <p>JavaScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI</p>
                  </li>

              </ul>
      </div>
  </main>
  </> );
}

export default Home;