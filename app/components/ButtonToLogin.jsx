import { useRouter } from 'next/navigation';
import { useGithubUserContext } from '../context/GithubUserContext';

export default function ButtonToLogin() {
  const router = useRouter();
  const { profile: { login } } = useGithubUserContext();
  const handleLogin = () => {
    localStorage.setItem('githubSearchUser', login);
    router.push('/timeline');
  };

  return (
    <button onClick={ handleLogin }>Entrar</button>
  );
}
