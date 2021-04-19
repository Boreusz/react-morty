import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__social"><a href="https://github.com/Boreusz"><FaGithubSquare /></a></li>
        <li className="footer__social"><a href="https://www.linkedin.com/in/mborowczyk/"><FaLinkedin /></a></li>
      </ul>
      <p className="footer__element">Mateusz Borowczyk - 2021</p>
    </footer>
  )
}

export default Footer
