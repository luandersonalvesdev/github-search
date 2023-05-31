'use client';

import { useGithubUserContext } from '../context/GithubUserContext';

export default function UsernameProfile() {
  const { profile: { name } } = useGithubUserContext();
  return <p>{name.length ? name : '...'}</p>;
}
