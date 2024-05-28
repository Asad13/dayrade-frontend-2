import { forwardRef } from 'react';

const TextArea = forwardRef(
  (
    {
      name,
      id,
      ariaLabel = '',
      value,
      onChange,
      onBlur,
      defaultValue,
      placeholder,
      rows = 10,
      cols = 40,
      disabled = false,
      required = true,
      isError = false,
      showErrorMsg = false,
      errorMsgClassNames,
      errorMsg = '',
      disbaledClassNames,
      wrapperClassNames,
      wrapperStyles,
      containerClassNames,
      containerStyles,
      classNames,
      errorClassNames,
      styles,
    },
    ref
  ) => {
    const textAreaAttributes = {
      name,
      id: id ?? name,
      disabled,
      required,
    };

    if (value !== undefined && value !== '') {
      textAreaAttributes.value = value;
    }

    if (onChange !== undefined) {
      textAreaAttributes.onChange = onChange;
    }

    if (onBlur !== undefined) {
      textAreaAttributes.onBlur = onBlur;
    }

    if (defaultValue !== undefined && defaultValue !== '') {
      textAreaAttributes.defaultValue = defaultValue;
    }

    if (
      !textAreaAttributes.defaultValue &&
      !textAreaAttributes.value &&
      placeholder !== undefined
    ) {
      textAreaAttributes.placeholder = placeholder;
    }

    return (
      <div
        className={`tw-w-full ${
          wrapperClassNames !== undefined && wrapperClassNames
        }`}
        style={wrapperStyles !== undefined ? wrapperStyles : {}}
      >
        <div
          className={`tw-w-full ${
            containerClassNames !== undefined && containerClassNames
          }`}
          style={containerStyles !== undefined ? containerStyles : {}}
        >
          <textarea
            ref={ref}
            rows={rows}
            cols={cols}
            aria-label={ariaLabel}
            {...textAreaAttributes}
            className={`tw-w-full tw-resize-none tw-border tw-outline-none ${
              classNames !== undefined && classNames
            } ${errorClassNames !== undefined && isError && errorClassNames} ${
              disabled && disbaledClassNames
            }`}
            style={styles !== undefined ? styles : {}}
          ></textarea>
        </div>
        {showErrorMsg && (
          <span
            className={`${
              errorMsgClassNames !== undefined && errorMsgClassNames
            }`}
          >
            {errorMsg}
          </span>
        )}
      </div>
    );
  }
);

export default TextArea;
