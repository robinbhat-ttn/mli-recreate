import { Theme, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { TextBlockFieldsFragment } from './__generated/ctf-text-block.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
// import { getColorConfigFromPalette } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '126rem',
    padding: theme.spacing(19, 0, 19),
  },
  sectionHeadlines: {
    marginBottom: theme.spacing(12),
  },
}));

export const CtfTextBlock = ({ body }: TextBlockFieldsFragment) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <div className={classes.innerContainer}>
        {body && (
          <div>
            <CtfRichtext {...body} />
          </div>
        )}
      </div>
    </Container>
  );
};
