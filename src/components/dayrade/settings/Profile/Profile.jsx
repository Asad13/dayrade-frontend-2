import { useCallback, useState, useRef } from 'react';
import DoubleInput from '../../form/DoubleInput';
import FlagCountrySelect from '../../form/FlagCountrySelect';
import FormRow from '../common/FormRow';
import {
  LabelInputTwin,
  Input,
  TextArea,
  ToggleBox,
} from '../../../../ui/form';

const initialErrorMsgs = {
  name: '',
  user_name: '',
  country: '',
};

const calculateAge = (dobString) => {
  const dob = new Date(dobString);
  if (isNaN(dob.getTime())) {
    return '';
  }

  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();
  const dayDifference = today.getDate() - dob.getDate();

  // Adjust age if the current month/day is before the birth month/day
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return `${age}`;
};

const Profile = ({ data }) => {
  const socialProfilesInputFields = [
    {
      attributes: {
        type: 'text',
        name: 'twitch_id',
        label: 'twitch.com/',
        defaultValue: data.profile.twitch_account ?? '',
        placeholder: 'Enter your Twitch account ID',
      },
      show: data.profile.show_twitch_account,
    },
    {
      attributes: {
        type: 'text',
        name: 'discord_id',
        label: 'discord.com/',
        defaultValue: data.profile.discord_account ?? '',
        placeholder: 'Enter your Discord account ID',
      },
      show: data.profile.show_discord_account,
    },
    {
      attributes: {
        type: 'text',
        name: 'twitter_id',
        label: 'twitter.com/',
        defaultValue: data.profile.twitter_account ?? '',
        placeholder: 'Enter your Twitter account ID',
      },
      show: data.profile.show_twitter_account,
    },
    {
      attributes: {
        type: 'text',
        name: 'instagram_id',
        label: 'instagram.com/',
        defaultValue: data.profile.instagram_account ?? '',
        placeholder: 'Enter your Instagram account ID',
      },
      show: data.profile.show_instagram_account,
    },
    {
      attributes: {
        type: 'text',
        name: 'linked_id',
        label: 'linkedin.com/profile/',
        defaultValue: data.profile.linkedin_account ?? '',
        placeholder: 'Enter your LinkedIn account ID',
      },
      show: data.profile.show_linkedin_account,
    },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    ...initialErrorMsgs,
  });

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const profileImage = useRef(null);

  const [profilePicSrc, setProfilePicSrc] = useState(
    data.profile?.profile_image_path ?? null
  );
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [showDeleteImageDialogue, setShowDeleteImageDialogue] = useState(false);

  const [country, setCountry] = useState(data.profile.country ?? '');

  const validate = useCallback(() => {
    const isValid = true;

    // if (!isValid) {
    //   setErrors((prevs) => ({
    //     ...prevs,
    //     ...newErrorMsgs,
    //   }));
    // }

    return isValid;
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (isSubmitting) return;

      const isValid = validate();

      if (isValid) {
        // submit form
        setIsSubmitting(true);

        try {
          //
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
      {showDeleteImageDialogue && <div>Will add model later</div>}
      <div className={`settings-tabpanel-heading-container`}>
        <h3 className={`heading3`}>Profile</h3>
        <p className={`text2 tw-text-textSecondary`}>
          Update your photo and profile details here.
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
          <FormRow label="Name">
            <div className="settings-input-container">
              <div className="settings-input-field-container">
                <DoubleInput
                  firstInput={{
                    type: 'text',
                    name: 'first_name',
                    defaultValue: data.profile.first_name ?? '',
                    placeholder: 'First Name',
                    ref: firstNameRef,
                    disabled: true,
                  }}
                  secondInput={{
                    type: 'text',
                    name: 'last_name',
                    defaultValue: data.profile.last_name ?? '',
                    placeholder: 'Last Name',
                    ref: lastNameRef,
                    disabled: true,
                  }}
                />
              </div>
              <div className="settings-checkbox-field-container">
                <span>Private</span>
                <ToggleBox
                  name="show_name"
                  defaultChecked={data.profile.show_name}
                />
                <span>Public</span>
              </div>
            </div>
          </FormRow>
          <FormRow label="Age">
            <div className="settings-input-container">
              <div className="settings-input-field-container">
                <DoubleInput
                  firstInput={{
                    type: 'text',
                    name: 'birth_date',
                    defaultValue: data.profile.dob ?? '',
                    ref: firstNameRef,
                    disabled: true,
                  }}
                  secondInput={{
                    type: 'text',
                    name: 'age',
                    defaultValue: calculateAge(data.profile.dob ?? ''),
                    ref: lastNameRef,
                    disabled: true,
                  }}
                />
              </div>
              <div className="settings-checkbox-field-container">
                <span>Private</span>
                <ToggleBox
                  name="show_birth_date"
                  defaultChecked={data.profile.show_dob}
                />
                <span>Public</span>
              </div>
            </div>
          </FormRow>
          <FormRow label="Username">
            <div className="settings-input-container">
              <div className="settings-input-field-container">
                <LabelInputTwin
                  {...{
                    type: 'text',
                    name: 'user_name',
                    label: 'dayrade.com/profile/',
                    defaultValue: data.user_name ?? '',
                    placeholder: "Your's Dayrade username",
                  }}
                  labelClassNames="settings-label"
                  inputClassNames="settings-input"
                  inputErrorClassNames="form-control-error"
                />
              </div>
              <div className="settings-checkbox-field-container"></div>
            </div>
          </FormRow>
          <FormRow label="Social Profiles">
            <>
              {socialProfilesInputFields.map((fieldValue) => (
                <div
                  className="settings-input-container"
                  key={fieldValue.attributes.name}
                >
                  <div className="settings-input-field-container">
                    <LabelInputTwin
                      {...fieldValue.attributes}
                      labelClassNames="settings-label"
                      inputClassNames="settings-special-input"
                      inputErrorClassNames="form-control-error"
                    />
                  </div>
                  <div className="settings-checkbox-field-container">
                    <span>Private</span>
                    <ToggleBox
                      name={`show_${fieldValue.attributes.name}`}
                      defaultChecked={fieldValue.show}
                    />
                    <span>Public</span>
                  </div>
                </div>
              ))}
            </>
          </FormRow>
          <FormRow
            label="Your Photo"
            supportingText="This will be displayed on your profile."
          >
            <div className="settings-input-container">
              <div className="settings-input-field-container settings-image-field-container">
                <div>
                  <span>
                    <img
                      className={`settings-profile-image`}
                      ref={profileImage}
                      src={
                        newProfilePic
                          ? URL.createObjectURL(newProfilePic)
                          : profilePicSrc
                          ? profilePicSrc
                          : '/images/avatar.png'
                      }
                      alt={''}
                    />
                  </span>
                </div>
                <div className="settings-profile-image-file-input-container">
                  <button
                    type="button"
                    className={`setings-profile-image-delete-btn`}
                    onClick={() => {
                      setShowDeleteImageDialogue(true);
                    }}
                  >
                    Delete
                  </button>
                  <label
                    htmlFor="profile_pic"
                    className={'custom-input-label setings-profile-image-label'}
                  >
                    {profilePicSrc != null ? 'Update' : 'Upload'}
                  </label>
                  <input
                    type="file"
                    className={'custom-input'}
                    onChange={(event) => {
                      if (event.target.files && event.target.files.length > 0) {
                        setNewProfilePic(event.target.files[0]);
                        setProfilePicSrc('');
                      }
                    }}
                    id="profile_pic"
                    name="profile_pic"
                    accept="image/jpg, image/png, image/jpeg"
                  />
                </div>
              </div>
              <div className="settings-checkbox-field-container"></div>
            </div>
          </FormRow>
          <FormRow
            label="Your bio"
            supportingText="Write a short introduction."
          >
            <div className="settings-input-container">
              <div className="settings-input-field-container">
                <TextArea
                  name="bio"
                  defaultValue={data.profile.bio ?? ''}
                  classNames="settings-textarea"
                  placeholder="Tell everyone something about you..."
                />
              </div>
              <div className="settings-checkbox-field-container"></div>
            </div>
          </FormRow>
          <FormRow label="Job title">
            <div className="settings-input-container">
              <div className="settings-input-field-container">
                <Input
                  type="text"
                  name="job_title"
                  defaultValue={data.profile.job_title ?? ''}
                  classNames="settings-input"
                  placeholder="Your's job title"
                />
                <div className="settings-job-title-checkbox-container">
                  <input
                    type="checkbox"
                    name="show_job_title"
                    defaultChecked={data.profile.show_job_title}
                    id="show_job_title"
                    className="checkbox-radio"
                  />
                  <label
                    htmlFor="show_job_title"
                    className="checkbox-radio-label"
                  >
                    Show my job title in my profile
                  </label>
                </div>
              </div>
              <div className="settings-checkbox-field-container"></div>
            </div>
          </FormRow>
          <FormRow label="Country">
            <div className="settings-input-container">
              <div className="settings-input-field-container">
                <FlagCountrySelect
                  selectedCountry={country}
                  setSelectedCountry={(countryCode) => setCountry(countryCode)}
                  isError={errors.country !== ''}
                />
              </div>
              <div className="settings-checkbox-field-container"></div>
            </div>
          </FormRow>
          <FormRow
            label="Alternative contact email"
            supportingText="Enter an alternative email if you’d like to be contacted via a different email."
          >
            <div className="settings-input-container">
              <div className="settings-input-field-container">
                <Input
                  type="email"
                  name="alt_email"
                  defaultValue={data.profile.alt_email}
                  classNames="settings-input"
                  placeholder="Set alternative email"
                />
              </div>
              <div className="settings-checkbox-field-container"></div>
            </div>
          </FormRow>
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
              value="Save"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
