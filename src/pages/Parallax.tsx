import React from 'react';

const Parallax = () => {
  const title = document.querySelector('.titlepar') as HTMLElement;

  const leaf1 = document.querySelector('.leaf1') as HTMLElement;
  const leaf2 = document.querySelector('.leaf2') as HTMLElement;
  const bush2 = document.querySelector('.bush2') as HTMLElement;
  const mount1 = document.querySelector('.mount1') as HTMLElement;
  const mount2 = document.querySelector('.mount2') as HTMLElement;

  document.addEventListener('scroll', function () {
    let value = window.scrollY;

    title.style.marginTop = value * 1.1 + 'px';
    leaf1.style.marginLeft = -value + 'px';
    leaf2.style.marginLeft = value + 'px';
    bush2.style.marginBottom = -value + 'px';
    mount1.style.marginBottom = -value * 1.1 + 'px';
    mount2.style.marginBottom = -value * 1.2 + 'px';
  });

  return (
    <>
      <head>
        <link rel="stylesheet" href="src/Parallax.css" />
      </head>

      <body>
        <header>
          <h1>Logo</h1>
          <nav>
            <a className="active" href="#">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
          </nav>
        </header>

        <section className="home">
          <img src="src/assets/parallax/mount2.png" className="mount2" />
          <img src="src/assets/parallax/mount1.png" className="mount1" />
          <img src="src/assets/parallax/bush2.png" className="bush2" />
          <h1 className="titlepar">Parallax</h1>

          <img src="src/assets/parallax/bush1.png" className="bush1" />
          <img src="src/assets/parallax/leaf2.png" className="leaf2" />
          <img src="src/assets/parallax/leaf1.png" className="leaf1" />
        </section>

        <section className="about">
          <h1>Parallax</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </section>
      </body>
    </>
  );
};

export default Parallax;
