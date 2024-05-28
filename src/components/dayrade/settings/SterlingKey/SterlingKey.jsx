import { useState, useCallback, useRef } from 'react';
import FormRow from '../common/FormRow';
import { Input } from '../../../../ui/form';

const ERROR_MESSAGES = {
  sterling_key: {
    empty: 'Provide a Key',
    invalid: 'Invalid Key',
  },
};

const initialErrorMsgs = {
  sterling_key: '',
};

const formFields = {
  sterling_key: {
    label: 'Activation Key',
    supportingText: 'Get your account up and running',
    inputAttributes: {
      type: 'text',
      name: 'sterling_key',
      placeholder: 'Sterling key',
    },
    inputProps: {
      showErrorMsg: true,
    },
    ref: null,
  },
};

const SterlingKey = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const osterlingKeyRef = useRef(null);

  formFields.sterling_key.ref = osterlingKeyRef;

  const [errors, setErrors] = useState({
    ...initialErrorMsgs,
  });

  const checkError = useCallback((e) => {
    const value = e.value.trim() ?? '';

    if (value === '') {
      return {
        isError: true,
        message: ERROR_MESSAGES[e.name].empty,
      };
    }

    return {
      isError: false,
      message: '',
    };
  }, []);

  const handleBlurAndChange = useCallback(
    (e) => {
      const { message } = checkError(e.target);
      if (errors[e.target.name] !== message) {
        setErrors((prevs) => ({
          ...prevs,
          [e.target.name]: message,
        }));
      }
    },
    [checkError, errors]
  );

  const validate = useCallback(() => {
    let isValid = true;
    const newErrorMsgs = { ...initialErrorMsgs };

    Object.entries(formFields).forEach(([key, formField]) => {
      if (formField.ref != null) {
        const { isError, message } = checkError(formField.ref.current);
        newErrorMsgs[key] = message;
        isValid = isValid && !isError;
      }
    });

    if (!isValid) {
      setErrors((prevs) => ({
        ...prevs,
        ...newErrorMsgs,
      }));
    }

    return isValid;
  }, [checkError]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (isSubmitting) return;

      const isValid = validate();

      if (isValid) {
        // submit form
        setIsSubmitting(true);

        const values = {
          old_password: '',
          new_password: '',
          confirm_new_password: '',
        };

        Object.entries(formFields).forEach(([key, formField]) => {
          if (formField.ref != null) {
            values[key] = formField.ref.current.value;
          }
        });

        try {
          // const { data } = await updatePassword(values);
          // if (data?.status) {
          //   Object.values(formFields).forEach((formField: InputFormField) => {
          //     if (formField.ref != null) {
          //       (formField.ref.current as HTMLInputElement).value = '';
          //     }
          //   });
          // } else {
          //   // show error toast
          // }
        } catch (error) {
          console.error(error);
          console.log(errors);

          if (
            error?.response?.data?.errors != null &&
            error?.response?.data?.errors !== undefined
          ) {
            setErrors((prevs) => ({
              ...prevs,
              ...error?.response?.data?.errors,
            }));
          }
        } finally {
          setIsSubmitting(false);
        }
      }
    },
    [validate, isSubmitting, errors]
  );

  return (
    <>
      <div className={`settings-tabpanel-heading-container`}>
        <h3 className={`heading3`}>Sterling Trade platform key</h3>
        <p className={`text2 tw-text-textSecondary`}>
          Activate your account permissions here.
        </p>
      </div>
      <div>
        <form
          method="post"
          acceptCharset="UTF-8"
          className="settings-tabs-form"
          onSubmit={handleSubmit}
          noValidate
        >
          {Object.entries(formFields).map(([key, value]) => (
            <FormRow
              label={value.label}
              supportingText={value.supportingText}
              key={key}
            >
              <div className="settings-input-container lg:!tw-items-start">
                <div className="settings-input-field-container">
                  <Input
                    ref={value.ref}
                    {...value.inputAttributes}
                    {...value.inputProps}
                    isError={errors[key] !== ''}
                    errorMsg={errors[key]}
                    onChange={handleBlurAndChange}
                    onBlur={handleBlurAndChange}
                    classNames="settings-input"
                    errorClassNames="!tw-border-error-dark focus:tw-border-error-dark"
                  />
                </div>
                <div className="settings-checkbox-field-container">
                  <input
                    type="submit"
                    className={`form-btn text2 settings-btn settings-btn-submit !tw-py-[11px] ${
                      isSubmitting && 'form-btn-submitting '
                    }`}
                    value="Activate Account"
                  />
                </div>
              </div>
            </FormRow>
          ))}
        </form>
      </div>
    </>
  );
};

export default SterlingKey;
