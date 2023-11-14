import React, { useState } from 'react';
import {
  ToggleLanguageStyled,
  UnavailableHelpfulLink,
  UnavailableInfoContainer,
  UnavailableStyled,
} from '../style/Unavailable';
import strings from '../utils/strings';
import { colors } from '../style/theme';
import { LanguageContext } from '../context/LanguageContext';
import ToggleLanguageComponent from '../components/ToggleLanguage';
// @ts-ignore
import ilustracaoDev from '../assets/image/ilustracao-dev.png';

export default function UnavailableView() {
  const { language } = React.useContext(LanguageContext);

  const [showTextPorque, setShowTextPorque] = useState<boolean>(false);

  const handleTextPorque = () => {
    setShowTextPorque(!showTextPorque);
  };

  return (
    <UnavailableStyled className="container-fluid container-lg">
      <div className="img-dev">
        <img src={ilustracaoDev} alt="" />
      </div>
      <UnavailableInfoContainer>
        <h1>{strings.titleUnavailableView[language.code]}</h1>
      </UnavailableInfoContainer>
      <UnavailableHelpfulLink>
        <div className="btns">
          <button onClick={handleTextPorque}>{strings.why[language.code]}</button>
        </div>
        <div className={`info-porque ${showTextPorque ? 'ativo' : ''}`}>
          {strings.messageUnavailableView[language.code]}
          <br />
          <a
            href="https://github.com/lucasfelipeluz/Portfolio.backend"
            target="_blank"
            className="link my-api"
          >
            <p style={{ color: colors.corDestaque }}>
              <i className="fas fa-server" style={{ marginRight: '10px' }}></i>
              {strings.myAPI[language.code]}
            </p>
          </a>
        </div>
        <div className="links-uteis">
          <a href="https://t.me/lucasfelipeluz" target="_blank" className="link telegram">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lucasfelipeluz/"
            target="_blank"
            className="link linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:lucasfelipeluz.dev@gmail.com" target="_blank" className="link email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/lucasfelipeluz" target="_blank" className="link github">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </UnavailableHelpfulLink>
      <ToggleLanguageComponent />
    </UnavailableStyled>
  );
}
