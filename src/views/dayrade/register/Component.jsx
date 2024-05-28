import { useRef, useState, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Head from '../../../components/dayrade/common/Head';
import FlagCountrySelect from '../../../components/dayrade/form/FlagCountrySelect';
import { checkUserName, register } from '../../../services/auth';
import { useDebounceValue } from '../../../hooks/useDebounce';
import Loader from '../../../ui/Loader';

const title = 'Register';
const DEFAULT_ERROR_MESSAGE = 'Registration failed';

const ERROR_MESSAGES = {
  email: {
    empty: 'Email is required',
    invalid: 'Invalid email',
  },
  user_name: {
    empty: 'Username is required',
    unique: 'This username is taken. Try another...',
    length: 'Username must be between 6 to 50 characters long',
    first_character:
      'The first character of your username must be an ASCII letter (a-z) or number (0-9)',
    last_character:
      'The last character of your username must be an ASCII letter (a-z) or number (0-9)',
    invalid:
      'Username can only contain letters (a-z), numbers (0-9), underscores (_) and hyphens (-)',
  },
  password: {
    empty: 'Password is required',
    length: 'Password must be between 8 to 30 more characters long',
  },
  confirm_password: {
    empty: 'Confirm Password is required',
    mismatch: "Confirm Password doesn't match",
  },
  country: {
    empty: 'Country is required',
  },
};

const initialErrorMsgs = {
  email: '',
  user_name: '',
  password: '',
  confirm_password: '',
  country: '',
};

const formFields = {
  email: {
    type: 'email',
    label: 'Email',
    ref: null,
  },
  user_name: {
    type: 'text',
    label: 'Username',
    ref: null,
  },
  password: {
    type: 'password',
    label: 'Password',
    ref: null,
  },
  confirm_password: {
    type: 'password',
    label: 'Confirm Password',
    ref: null,
  },
};

export const Component = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRef = useRef(null);
  const unameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  formFields.email.ref = emailRef;
  formFields.user_name.ref = unameRef;
  formFields.password.ref = passwordRef;
  formFields.confirm_password.ref = confirmPasswordRef;

  const [username, setUsername] = useState(null);
  const [country, setCountry] = useState('');

  const [authError, setAuthError] = useState('');
  const [errors, setErrors] = useState({
    ...initialErrorMsgs,
  });

  const debouncedUsername = useDebounceValue(username);
  useEffect(() => {
    const abortController = new AbortController();
    console.log(debouncedUsername);
    const isValidUsername = async () => {
      const data = await checkUserName(
        { user_name: debouncedUsername },
        abortController.signal
      );
      if (!data.status) {
        let message;
        if (data?.errors !== undefined) {
          message = data?.errors?.user_name;
        } else {
          message = data.message;
        }

        setErrors((prevs) => ({
          ...prevs,
          user_name: message ?? ERROR_MESSAGES.user_name.unique,
        }));
      } else {
        setErrors((prevs) => ({
          ...prevs,
          user_name: '',
        }));
      }
    };

    if (debouncedUsername != null) isValidUsername();

    return () => abortController.abort();
  }, [debouncedUsername]);

  const checkError = useCallback((e) => {
    const value = e.value.trim() ?? '';

    if (value === '') {
      return {
        isError: true,
        message: ERROR_MESSAGES[e.name].empty,
      };
    }

    if (e.type === 'email') {
      const regExp =
        /^[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;

      if (!regExp.test(value)) {
        return {
          isError: true,
          message: ERROR_MESSAGES.email.invalid,
        };
      }
    }

    if (e.name === 'user_name') {
      if (value.length < 6 || value.length > 50) {
        return {
          isError: true,
          message: ERROR_MESSAGES.user_name.length,
        };
      }

      if (!/^[a-zA-Z0-9]/.test(value)) {
        return {
          isError: true,
          message: ERROR_MESSAGES.user_name.first_character,
        };
      }

      if (!/[a-zA-Z0-9]$/.test(value)) {
        return {
          isError: true,
          message: ERROR_MESSAGES.user_name.last_character,
        };
      }

      if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9_-]*[a-zA-Z0-9])?$/.test(value)) {
        return {
          isError: true,
          message: ERROR_MESSAGES.user_name.invalid,
        };
      }
    }

    if (e.type === 'password' && e.name === 'password') {
      if (value.length < 8) {
        return {
          isError: true,
          message: ERROR_MESSAGES.password.length,
        };
      } else if (
        value !== confirmPasswordRef.current?.value &&
        confirmPasswordRef.current?.value.length !== undefined &&
        confirmPasswordRef.current?.value.length > 0
      ) {
        setErrors((prevs) => ({
          ...prevs,
          confirm_password: ERROR_MESSAGES.confirm_password.mismatch,
        }));

        return {
          isError: true,
          message: '',
        };
      } else {
        setErrors((prevs) => ({
          ...prevs,
          confirm_password: '',
        }));

        return {
          isError: false,
          message: '',
        };
      }
    }

    if (
      e.type === 'password' &&
      e.name === 'confirm_password' &&
      value !== passwordRef.current?.value
    ) {
      return {
        isError: true,
        message: ERROR_MESSAGES.confirm_password.mismatch,
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
      if (e.target.name !== 'user_name') {
        if (errors[e.target.name] !== message) {
          setErrors((prevs) => ({
            ...prevs,
            [e.target.name]: message,
          }));
        }
      }
    },
    [checkError, errors]
  );

  const handleCountryChange = useCallback((countryCode) => {
    setCountry(countryCode);
    if (countryCode !== '') {
      setErrors((prevs) => ({
        ...prevs,
        country: '',
      }));
    } else {
      setErrors((prevs) => ({
        ...prevs,
        country: ERROR_MESSAGES.country.empty,
      }));
    }
  }, []);

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

    if (country === '') {
      isValid = isValid && false;
      newErrorMsgs.country = ERROR_MESSAGES.country.empty;
    }

    if (!isValid) {
      setErrors((prevs) => ({
        ...prevs,
        ...newErrorMsgs,
      }));
    }

    return isValid;
  }, [checkError, country]);

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
          email: '',
          user_name: '',
          password: '',
          confirm_password: '',
          country: country,
        };

        Object.entries(formFields).forEach(([key, formField]) => {
          if (formField.ref != null) {
            values[key] = formField.ref.current.value;
          }
        });

        try {
          const { data } = await register(values);
          if (data?.status) {
            // Object.values(formFields).forEach((formField: FormField) => {
            //   if (formField.ref != null) {
            //     (formField.ref.current as HTMLInputElement).value = '';
            //   }
            // });
            // setCountry('');
            navigate('/');
          } else {
            setAuthError(data.message ?? DEFAULT_ERROR_MESSAGE);
          }
        } catch (error) {
          console.error(error);
          setAuthError(error?.response?.data?.message ?? DEFAULT_ERROR_MESSAGE);
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
    [validate, country, navigate, isSubmitting]
  );

  return (
    <>
      <Head title={title} />
      <main className="auth-main">
        {isSubmitting && <Loader />}
        <div className="auth-form-container">
          {authError !== '' && (
            <div className="auth-form-feedback-container">
              <h2 className="auth-form-feedback-heding">{authError}</h2>
            </div>
          )}
          <form
            method="post"
            acceptCharset="UTF-8"
            className="auth-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {Object.entries(formFields).length !== undefined &&
              Object.entries(formFields).length > 0 &&
              Object.entries(formFields).map(([key, formField]) => (
                <div key={key} className="register-form-row">
                  <div className="form-inner-row">
                    <div className="form-col form-label-container">
                      <label className="form-label" htmlFor={key}>
                        {formField.label}
                      </label>
                    </div>
                    <div className="form-col form-control-container">
                      <input
                        ref={formField.ref}
                        onChange={(event) => {
                          handleBlurAndChange(event);

                          if (key === 'user_name') {
                            setUsername(event.target.value);
                          }
                        }}
                        onBlur={handleBlurAndChange}
                        type={formField.type}
                        className={`form-control form-control-spacing ${
                          errors[key] !== '' && 'form-control-error'
                        }`}
                        name={key}
                        id={key}
                      />
                    </div>
                  </div>
                  <div className="form-inner-row">
                    <div className="form-label-container"></div>
                    <div className="form-control-container">
                      <span className="input-error-feedback">
                        {errors[key]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            <div className="register-form-row">
              <div className="form-inner-row">
                <div className="form-col form-label-container">
                  <label className="form-label" htmlFor="country">
                    Country
                  </label>
                </div>
                <div className="form-col form-control-container">
                  <FlagCountrySelect
                    selectedCountry={country}
                    setSelectedCountry={handleCountryChange}
                    isError={errors.country !== ''}
                  />
                </div>
              </div>
              <div className="form-inner-row">
                <div className="form-label-container"></div>
                <div className="form-control-container">
                  <span className="input-error-feedback">{errors.country}</span>
                </div>
              </div>
            </div>
            <div className="auth-btn-container">
              <input
                type="submit"
                className="auth-btn auth-submit-btn"
                value="Register"
                disabled={isSubmitting}
              />
            </div>
          </form>
          <div className="auth-form-bottom">
            <p>
              Already have an account?{' '}
              <Link to="/" className="underlined-link">
                login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

Component.displayName = 'Register';
