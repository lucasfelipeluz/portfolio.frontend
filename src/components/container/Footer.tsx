import { Container, Typography } from '@mui/material';
import { LightbulbOutline, LightbulbVariant } from 'mdi-material-ui';
import { useSettings } from 'src/core/context/settingsContext';
import { applicationConfig } from 'src/utils/config';
import { FooterSection } from '../styles/section';

export default function FooterComponent() {
  const { theme, toggleLayoutMode } = useSettings();

  return (
    <FooterSection>
      <Container className='content'>
        <Typography className='version'>{applicationConfig.version}</Typography>
        <Typography className='copyright'>Desenvolvido por Lucas</Typography>
        {/* <Typography className='copyright'>Montado pixel a pixel por Lucas Luz</Typography> */}
        {theme.palette.mode === 'dark' ? (
          <LightbulbOutline
            className='icon'
            onClick={toggleLayoutMode}
            sx={{
              fontSize: '20px',
            }}
          />
        ) : (
          <LightbulbVariant
            className='icon'
            onClick={toggleLayoutMode}
            sx={{
              fontSize: '20px',
            }}
          />
        )}
      </Container>
    </FooterSection>
  );
}
