import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <img src="https://www.svgrepo.com/show/299502/heart.svg" alt="Coração" style={{width:"75px", height:"35px"}} />
      <img src="https://i.ibb.co/26qrYqJ/tvquase-logo.png" alt="Tv Quase logo" style={{width:"50px", height:"50px"}} />
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
