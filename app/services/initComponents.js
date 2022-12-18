export const initComponents = () => {

    const app = document.querySelector(`#app`);
    const appContent = `
        <div id="container">
            <header id="header">HEADER</header>
            <nav id="navbar">NAVBAR</nav>
            <div id="hero">HERO</div>
            <div id="gallery">GALLERY</div>
            <div id="aside">ASIDE</div>
            <footer id="footer">FOOTER</footer>
       </div>
    
    `
    app.innerHTML = appContent;

}