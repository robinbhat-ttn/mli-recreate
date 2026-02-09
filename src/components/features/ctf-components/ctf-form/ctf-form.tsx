import { useRouter } from 'next/router';
import { CtfFormRenderer } from './ctf-form-renderer';

import { ExpandedFormFieldsFragment } from './__generated/ctf-form.generated';

export const CtfForm = (props: ExpandedFormFieldsFragment) => {
  const router = useRouter();
  const stage = router.query.stage;
  const isQuoteStage = stage === 'quote';

  //console.log('form props:', props);

  // Lead form - hidden when quote stage is active
  if (props.formType && props.formType === 'Term Insurance Calculator Form' && !isQuoteStage) {
    console.log('lead form props:', props);
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
    console.log('quote form props:', props);
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

  return <div></div>;
};
