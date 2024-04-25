import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const calculateAge = dateOfBirth => {
  const birthDate = dayjs(dateOfBirth);
  const currentDate = dayjs();
  return currentDate.diff(birthDate, 'years');
};

export const transformFormData = formData => {
  const fullName = `${formData.firstName} ${formData.lastName}`;
  const age = calculateAge(formData.dateOfBirth);
  return {
    fullName,
    age,
    gender: formData.gender,
    userName: formData.userName,
    bio: formData.bio,
    pic: formData.pic
  };
};

/**
 * Converts an age to an estimated date of birth.
 *
 * @param {number} age - The age to convert into a date of birth.
 * @returns {dayjs.Dayjs} The estimated date of birth as a dayjs object.
 */
export const convertAgeToDateOfBirth = age => {
  const currentDate = dayjs();
  // Subtract the given age in years from the current date to get the approximate date of birth
  const birthYear = currentDate.subtract(age - 1, 'year');

  // This provides a basic estimate; you might need more information to get the exact date
  return birthYear;
};
