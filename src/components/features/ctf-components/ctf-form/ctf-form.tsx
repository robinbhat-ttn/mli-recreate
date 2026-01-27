import { CtfFormRenderer } from './ctf-form-renderer';

import { FormFieldsFragment } from '../ctf-tabbed-form/__generated/ctf-tabbed-form.generated';

export const CtfForm = (props: FormFieldsFragment) => {
  console.log('Lead Form Props:', props);
  if (props.formType && props.formType !== 'Home Page Form') {
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

  return <div></div>;
};
