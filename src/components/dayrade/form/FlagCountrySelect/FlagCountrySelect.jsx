import { useState, useRef, useCallback, useEffect } from 'react';
import { countries } from '../../../../assets/data/countries';

const FlagCountrySelect = ({
  selectedCountry,
  setSelectedCountry,
  isError = false,
  disabled = false,
}) => {
  // const [selectedCountry, setSelectedCountry] = useState<string>(value ?? '');
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChange = useCallback(
    (countryCode) => {
      if (!disabled) {
        // setSelectedCountry(countryCode);
        setSelectedCountry(countryCode);
        setOpen(false);
      }
    },
    [setSelectedCountry, disabled]
  );

  return (
    <div className="select-container" ref={selectRef}>
      <div
        className={`select ${isError && 'select-error'} ${
          disabled && 'select-disabled'
        }`}
        aria-label="Select your country"
        aria-expanded={open && !disabled}
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedCountry !== '' ? (
          <div className="select-selected-option">
            <span className="flag-country-select-icon-container">
              <img
                className="flag-country-select-icon"
                src={`/flags/${selectedCountry.toLowerCase()}.svg`}
                alt={selectedCountry}
              />
            </span>
            <span>{countries[selectedCountry]}</span>
          </div>
        ) : (
          <div>
            <span>Select a country</span>
          </div>
        )}
      </div>
      {open && !disabled && (
        <div className="select-options-container flag-country-select-options-container custom-scrollbar">
          {Object.keys(countries).map((countryCode) => (
            <div
              key={countryCode}
              className="select-option"
              onClick={() => handleChange(countryCode)}
            >
              <span className="flag-country-select-icon-container">
                <img
                  className="flag-country-select-icon"
                  src={`/flags/${countryCode.toLowerCase()}.svg`}
                  alt={selectedCountry}
                />
              </span>
              <span>{countries[countryCode]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlagCountrySelect;
