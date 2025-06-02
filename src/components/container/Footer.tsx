import { Box, Container, Typography } from '@mui/material';
import { LightbulbOutline, LightbulbVariant } from 'mdi-material-ui';
import packageJSON from 'src/../package.json';
import { useSettings } from 'src/core/context/settingsContext';
import { FooterSection } from '../styles/section';

export default function FooterComponent() {
  const { theme, toggleLayoutMode } = useSettings();

  return (
    <FooterSection>
      <Container className='content'>
        <Typography className='version'>v{packageJSON.version}</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
          }}
        >
          <Typography className='copyright'>Desenvolvido por Lucas</Typography>
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
        </Box>
      </Container>
    </FooterSection>
  );
}
