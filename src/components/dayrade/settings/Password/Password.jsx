import { useState, useCallback, useRef } from 'react';
import FormRow from '../common/FormRow';
import { Input } from '../../../../ui/form';

const ERROR_MESSAGES = {
  old_password: {
    empty: 'Old Passowrd is required',
  },
  new_password: {
    empty: 'New Password is required',
    length: 'New Password must be between 8 to 30 more characters long',
  },
  confirm_new_password: {
    empty: 'Confirm New Password is required',
    mismatch: "Confirm New Password doesn't match with New Password",
  },
};

const initialErrorMsgs = {
  old_password: '',
  new_password: '',
  confirm_new_password: '',
};

const formFields = {
  old_password: {
    label: 'Old Password',
    inputAttributes: {
      type: 'password',
      name: 'old_password',
      placeholder: "Your's Old Password",
    },
    inputProps: {
      showErrorMsg: true,
    },
    ref: null,
  },
  new_password: {
    label: 'New Password',
    inputAttributes: {
      type: 'password',
      name: 'new_password',
      placeholder: 'New Password',
    },
    inputProps: {
      showErrorMsg: true,
    },
    ref: null,
  },
  confirm_new_password: {
    label: 'Confirm New Password',
    inputAttributes: {
      type: 'password',
      name: 'confirm_new_password',
      placeholder: 'Confirm New Password',
    },
    inputProps: {
      showErrorMsg: true,
    },
    ref: null,
  },
};

const Password = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmNewPasswordRef = useRef(null);

  formFields.old_password.ref = oldPasswordRef;
  formFields.new_password.ref = newPasswordRef;
  formFields.confirm_new_password.ref = confirmNewPasswordRef;

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

    if (e.type === 'password' && e.name === 'new_password') {
      if (value.length < 8) {
        return {
          isError: true,
          message: ERROR_MESSAGES.new_password.length,
        };
      } else if (
        value !== confirmNewPasswordRef.current?.value &&
        confirmNewPasswordRef.current?.value.length !== undefined &&
        confirmNewPasswordRef.current?.value.length > 0
      ) {
        setErrors((prevs) => ({
          ...prevs,
          confirm_new_password: ERROR_MESSAGES.confirm_new_password.mismatch,
        }));

        return {
          isError: true,
          message: '',
        };
      } else {
        setErrors((prevs) => ({
          ...prevs,
          confirm_new_password: '',
        }));

        return {
          isError: false,
          message: '',
        };
      }
    }

    if (
      e.type === 'password' &&
      e.name === 'confirm_new_password' &&
      value !== newPasswordRef.current?.value
    ) {
      return {
        isError: true,
        message: ERROR_MESSAGES.confirm_new_password.mismatch,
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
        <h3 className={`heading3`}>Password</h3>
        <p className={`text2 tw-text-textSecondary`}>
          Please enter your current password to change your password.
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
            <FormRow label={value.label} key={key}>
              <div className="settings-input-container">
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
                <div className="settings-checkbox-field-container"></div>
              </div>
            </FormRow>
          ))}
          <div className="settings-profile-btn-container">
            <input
              type="reset"
              className={`form-btn text2 ${
                isSubmitting && 'form-btn-submitting '
              }`}
              value="Cancel"
            />
            <input
              type="submit"
              className={`form-btn text2 ${
                isSubmitting && 'form-btn-submitting '
              }`}
              value="Update Password"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Password;
