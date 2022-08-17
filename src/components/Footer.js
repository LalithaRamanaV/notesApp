export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">Connect with me here</div>
      <ul className="list-non-bullet">
        <li className="list-item-inline">
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://github.com/LalithaRamanaV"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>

        <li className="list-item-inline">
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://www.linkedin.com/in/lalithavadavalli/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
