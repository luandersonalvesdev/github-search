export const verifyLogin = (router) => {
  const getUserFromLS = localStorage.getItem('githubSearchUser');
  if (!getUserFromLS) { router.push('/'); }
};
