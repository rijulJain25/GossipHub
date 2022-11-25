import "./footer1.scss";

const Footer1 = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="footer1">
        <p>Copyright ⓒ {year}</p>
      </footer>
    );
}

export default Footer1
