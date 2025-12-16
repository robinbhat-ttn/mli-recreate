import { Theme, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { File } from 'react-kawaii';

import { PageContainer } from '@src/components/templates/page-container';
import colorfulTheme from '@src/theme';

interface PropsInterface {
  error?: {
    code: number;
    message?: string;
  };
}

const Root = styled('div')({
  width: '100%',
  minhHeight: '100%',
  color: 'black',
});

const StyledContainer = styled(Container)(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(16),
}));

const Content = styled('div')(({ theme }: { theme: Theme }) => ({
  '& > *': {
    marginBottom: theme.spacing(6),
  },
}));

const IconWrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  marginRight: theme.spacing(4),
  marginBottom: theme.spacing(3),
}));

const HeadlineWrap = styled('div')({
  alignItems: 'center',
  display: 'flex',
});

export const PageError = (props: PropsInterface) => {
  const { t } = useTranslation();

  const error =
    props.error === undefined
      ? {
          code: 400,
          message: t('error.somethingWentWrong'),
        }
      : props.error;

  return (
    <Root>
      <PageContainer>
        <StyledContainer>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={8}>
              <HeadlineWrap>
                <IconWrapper>
                  <File size={100} mood="ko" color={colorfulTheme.palette.primary.main} />
                </IconWrapper>
                <Typography variant="h1" gutterBottom>
                  {t('error.code', { code: error.code })}
                </Typography>
              </HeadlineWrap>
              {error.message && (
                <Content>
                  <Typography variant="h4">{error.message}</Typography>
                </Content>
              )}
            </Grid>
          </Grid>
        </StyledContainer>
      </PageContainer>
    </Root>
  );
};
