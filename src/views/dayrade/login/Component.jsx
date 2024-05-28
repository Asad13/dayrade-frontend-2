import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../hooks/useUserContext';
import Head from '../../../components/dayrade/common/Head';
import { login } from '../../../services/auth';
import Loader from '../../../ui/Loader';

const title = 'Login';
const DEFAULT_ERROR_MESSAGE = 'Invalid username/email or password';

const formFields = {
  identity: {
    type: 'text',
    label: 'Username or Email',
    ref: null,
  },
  password: {
    type: 'password',
    label: 'Password',
    ref: null,
  },
};

export const Component = () => {
  const { setIsAuthenticated } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const identityRef = useRef(null);
  const passwordRef = useRef(null);

  formFields.identity.ref = identityRef;
  formFields.password.ref = passwordRef;

  const [authError, setAuthError] = useState('');

  const checkError = useCallback((e) => {
    if (e.value === '') {
      return {
        isError: true,
      };
    }

    return {
      isError: false,
    };
  }, []);

  const validate = useCallback(() => {
    let isValid = true;

    Object.values(formFields).forEach((formField) => {
      if (formField.ref != null) {
        const { isError } = checkError(formField.ref.current);

        isValid = isValid && !isError;
      }
    });

    if (isValid) {
      setAuthError('');
    } else {
      setAuthError(DEFAULT_ERROR_MESSAGE);
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
          identity: '',
          password: '',
        };

        Object.entries(formFields).forEach(([key, formField]) => {
          if (formField.ref != null) {
            values[key] = formField.ref.current.value;
            formField.ref.current.value = '';
          }
        });

        try {
          const { data } = await login(values);
          if (data?.status) {
            setIsAuthenticated(true);
          } else {
            setAuthError(data?.message ?? DEFAULT_ERROR_MESSAGE);
          }
        } catch (error) {
          console.error(error);
          setAuthError(error?.response?.data?.message ?? DEFAULT_ERROR_MESSAGE);
        } finally {
          setIsSubmitting(false);
        }
      }
    },
    [validate, setIsAuthenticated, isSubmitting, setAuthError, setIsSubmitting]
  );

  return (
    <>
      <Head title={title} />
      <main className="auth-main">
        {isSubmitting && <Loader />}
        <div className="auth-form-container">
          {authError !== '' && (
            <div className="auth-form-feedback-container">
              <h2 className="auth-form-feedback-heding">Wrong Credentials</h2>
              <span className="auth-form-feedback-message">{authError}</span>
            </div>
          )}
          <form
            method="post"
            acceptCharset="UTF-8"
            className="auth-form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            autoCorrect="false"
          >
            {Object.entries(formFields).length !== undefined &&
              Object.entries(formFields).length > 0 &&
              Object.entries(formFields).map(([key, formField]) => (
                <div key={key} className="form-row login-form-row">
                  <div className="form-inner-row">
                    <div className="form-col form-label-container">
                      <label className="form-label" htmlFor={key}>
                        {formField.label}
                      </label>
                    </div>
                    <div className="form-col form-control-container">
                      <input
                        ref={formField.ref}
                        type={formField.type}
                        className={`form-control form-control-spacing`}
                        name={key}
                        id={key}
                      />
                    </div>
                  </div>
                </div>
              ))}
            <div className="auth-btn-container">
              <input
                type="submit"
                className="auth-btn auth-submit-btn"
                value="Login"
                disabled={isSubmitting}
              />
            </div>
          </form>
          <div className="auth-form-bottom">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="underlined-link">
                register
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

Component.displayName = 'Login';
