import LoginScreenProfile from './components/LoginScreenProfile';
import UserFinder from './components/UserFinder';

export default function Home() {
  return (
    <main>
      <LoginScreenProfile />
      <UserFinder goal="user" />
    </main>
  );
}
