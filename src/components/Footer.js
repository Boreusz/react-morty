import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__social"><FaGithubSquare /></li>
        <li className="footer__social"><FaLinkedin /></li>
      </ul>
      <p className="footer__element">Mateusz Borowczyk - 2021</p>
    </footer>
  )
}

export default Footer
