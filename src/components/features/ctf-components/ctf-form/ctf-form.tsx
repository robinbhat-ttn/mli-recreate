import { useRouter } from 'next/router';

import { ExpandedFormFieldsFragment } from './__generated/ctf-form.generated';
import { CtfFormRenderer } from './ctf-form-renderer';

export const CtfForm = (props: ExpandedFormFieldsFragment) => {
  const router = useRouter();
  const stage = router.query.stage;
  const isQuoteStage = stage === 'quote';
  const isRiderStage = stage === 'rider';

  console.log('form props:', props);

  // Lead form - hidden when quote or rider stage is active
  if (
    props.formType &&
    props.formType === 'Term Insurance Calculator Form' &&
    !isQuoteStage &&
    !isRiderStage
  ) {
    return (
      <CtfFormRenderer
        fields={props.fieldsCollection?.items || []}
        submitButton={props.submitButton}
        isTabbedForm={false}
        title={props.title}
        formType="lead"
      />
    );
  }

  // Quote form – Term Insurance Step 1 (shown only on quote stage)
  if (props.formType && props.formType === 'Term Insurance Step 1' && isQuoteStage) {
    //console.log('quote form props:', props);
    return (
      <CtfFormRenderer
        fields={props.fieldsCollection?.items || []}
        submitButton={props.submitButton}
        isTabbedForm={false}
        title={props.title}
        description={props.description}
        formType="quote"
      />
    );
  }

  // CardCheckbox - shown only on rider stage
  if (props.formType && props.formType === 'Term Insurance Step 2' && isRiderStage) {
    console.log('rider form props:', props);
    return (
      <CtfFormRenderer
        fields={props.fieldsCollection?.items || []}
        submitButton={props.submitButton}
        isTabbedForm={false}
        title={props.title}
        formType="rider"
      />
    );
  }

  return <></>;
};
