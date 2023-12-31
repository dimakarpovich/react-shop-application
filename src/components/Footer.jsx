function Footer() {
    return (
        <footer className="page-footer green lighten-4 ">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/dimakarpovich/react-shop-application"
                        target="_blank"
                        rel="noreferrer"
                    >
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
