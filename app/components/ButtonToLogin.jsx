import { useRouter } from 'next/navigation';
import { useCurrentSearch } from '../context/CurrentSearchContext';
import { useGithubUserContext } from '../context/GithubUserContext';

export default function ButtonToLogin() {
  const router = useRouter();
  const { successfulLogin } = useGithubUserContext();
  const { currSearch: { login } } = useCurrentSearch();

  const handleLogin = () => {
    localStorage.setItem('githubSearchUser', login);
    router.push('/timeline');
    successfulLogin();
  };

  return (
    <button
      onClick={ handleLogin }
      className="
        bg-green-700
        text-white
        rounded py-1
        min-w-full
        hover:bg-green-800
        duration-150"
    >
      Entrar
    </button>
  );
}
