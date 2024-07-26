import { useLanguage } from 'src/core/context/languageContext';
import {
  DeveloperIlustrationStyled,
  WelcomeIllustrationDeveloperStyled,
  WelcomeStyled,
} from 'src/core/theme/Welcome';
import { Section } from 'src/core/theme/globals';

import React, { FunctionComponent } from 'react';

import { Javascript } from '@mui/icons-material';
import { styled } from '@mui/material';
import { LanguagePython } from 'mdi-material-ui';
import Icon from '@mdi/react';
import * as IconPath from '@mdi/js';
import { IconProps } from '@mdi/react/dist/IconProps';
import { colors } from 'src/core/theme/theme';
import { red } from '@mui/material/colors';
import WelcomeInfomationComponent from '../container/WelcomeInfomation';

const FloatJavascript = styled(LanguagePython)`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  width: 100px;
  height: 100px;
  animation: float 6s ease-in-out infinite;
  position: absolute;
  left: -20%;
  top: 20%;
`;

interface FloatIconProps extends IconProps {
  left?: string;
  top?: string;
}

const FloatIcon = styled(Icon)((props: FloatIconProps) => ({
  '@keyframes float': {
    '0%': {
      transform: 'translatey(0px)',
    },
    '50%': {
      transform: 'translatey(-30px)',
    },
    '100%': {
      transform: 'translatey(0px)',
    },
  },

  position: 'absolute',
  zIndex: 1,
  width: '10%',
  height: '10%',
  animation: 'float 6s ease-in-out infinite',
  color: colors.corDestaque,
}));

function getRandomLocation() {
  const left = Math.floor(Math.random() * 111) - 10;
  const top = Math.floor(Math.random() * 111) - 10;

  return { left: `${left}%`, top: `${top}%` };
}

function SectionWelcomeComponent() {
  const { language } = useLanguage();

  return (
    <Section style={{ overflow: 'hidden' }}>
      <WelcomeStyled className='container-fluid container-lg'>
        <WelcomeInfomationComponent
          language={language}
          jobTitle='Desenvolvedor Full Stack'
          name='Lucas Felipe Luz'
        />
        <DeveloperIlustrationStyled>
          <WelcomeIllustrationDeveloperStyled
            src='/images/illustration/illustration-dev.svg'
            alt='Developer'
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              // backgroundColor: '#1E272E',
              backgroundColor: 'transparent',
              // border: '1px solid red',
              width: '100%',
              height: '100%',
              zIndex: 2,
              // filter: 'blur(10px)',
            }}
          >
            {/* <FloatIcon path={IconPath.mdiLanguagePython} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiLanguageJavascript} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiLanguageCsharp} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiDatabase} sx={{ ...getRandomLocation() }} />
            <FloatIcon
              path={IconPath.mdiMicrosoftVisualStudioCode}
              sx={{ ...getRandomLocation() }}
            />
            <FloatIcon path={IconPath.mdiGithub} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiDotNet} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiReact} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiLanguageTypescript} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiMaterialDesign} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiBootstrap} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiJquery} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiLanguageCss3} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiLanguageHtml5} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiLanguageGo} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiGoogleCloud} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiAws} sx={{ ...getRandomLocation() }} />
            <FloatIcon path={IconPath.mdiMicrosoftAzure} sx={{ ...getRandomLocation() }} /> */}
          </div>
        </DeveloperIlustrationStyled>
      </WelcomeStyled>
    </Section>
  );
}

export default SectionWelcomeComponent;
