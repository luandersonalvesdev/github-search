const CORRECT_STATUS = 200;
const URL_GITHUB = 'https://api.github.com/users/';

export const fetchUser = async (username) => {
  const response = await fetch(`${URL_GITHUB}${username}`);
  if (response.status === CORRECT_STATUS) {
    const data = await response.json();
    return data;
  }
  return ({ notFound: true });
};

export const fetchRepo = async (username) => {
  const response = await fetch(`${URL_GITHUB}${username}/repos`);
  if (response.status === CORRECT_STATUS) {
    const data = await response.json();
    return data;
  }
  return ({ notFound: true });
};
