import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';

import type { AccordionFieldsFragment } from './__generated/ctf-accordion.generated';
import styles from './ctf-accordion.module.scss';
import { CtfRichtext } from '../ctf-richtext/ctf-richtext';

interface Props extends AccordionFieldsFragment {}

export const CtfAccordion: React.FC<Props> = props => {
  const inspectorMode = useContentfulInspectorMode();
  const items = useMemo(
    () => props?.accordionItemsCollection?.items?.filter(Boolean) ?? [],
    [props],
  );

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  }, []);

  if (!items.length) return null;

  return (
    <Box
      className={styles.accordion}
      {...inspectorMode({ entryId: props.sys.id, fieldId: 'accordion' })}
    >
      {items.map((item, idx) => {
        const question = (item as any)?.questionText ?? '';
        const answer = (item as any)?.answerText ?? null;
        const id = (item as any)?.sys?.id ?? `q-${idx}`;
        const isExpanded = expandedId === id;

        return (
          <Accordion
            key={id}
            disableGutters
            square
            expanded={isExpanded}
            onChange={() => handleToggle(id)}
            className={`container-sec ${styles['accordion__item']}`}
            {...inspectorMode({ entryId: item?.sys.id, fieldId: 'question' })}
          >
            <AccordionSummary
              id={`accordion-${id}-header`}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`accordion-${id}-content`}
              className={styles['accordion__summary']}
            >
              <Typography className={styles['accordion__title']}>{question}</Typography>
            </AccordionSummary>

            <AccordionDetails
              id={`accordion-${id}-content`}
              className={styles['accordion__details']}
            >
              <Box className={styles['accordion__content']}>
                {answer?.json ? (
                  <CtfRichtext json={answer.json} links={answer.links} disableContainer={true} />
                ) : null}
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default CtfAccordion;
