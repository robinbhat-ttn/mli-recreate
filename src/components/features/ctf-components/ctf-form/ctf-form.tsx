import { FormFieldsFragment } from '../ctf-tabbed-form/__generated/ctf-tabbed-form.generated';
import { CtfFormRenderer } from './ctf-form-renderer';

export const CtfForm = (props: FormFieldsFragment) => {
  console.log('CtfForm props:', props);

  if (props.formType && props.formType !== 'Home Page Form') {
    return (
      <CtfFormRenderer
        fields={props.fieldsCollection?.items || []}
        submitButton={props.submitButton}
        isTabbedForm={false}
        title={props.title}
      />
    );
  }

  return <div></div>;
};
