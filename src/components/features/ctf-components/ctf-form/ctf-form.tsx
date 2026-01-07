import { FormFieldsFragment } from '../ctf-tabbed-form/__generated/ctf-tabbed-form.generated';
import { CtfFormRenderer } from './ctf-form-renderer';

export const CtfForm = (props: FormFieldsFragment) => {
  // Render calculator form for non-tabbed forms based on formType
  if (props.formType && props.formType !== 'Home Page Form') {
    return (
      <CtfFormRenderer
        fields={props.fieldsCollection?.items || []}
        submitButton={props.submitButton}
        isTabbedForm={false}
      />
    );
  }

  // Default fallback
  return <div></div>;
};
