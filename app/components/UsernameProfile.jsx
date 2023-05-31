'use client';

import { useGithubUserContext } from '../context/GithubUserContext';

export default function UsernameProfile() {
  const { profile: { login } } = useGithubUserContext();
  return <p>{login.length ? login : '...'}</p>;
}
