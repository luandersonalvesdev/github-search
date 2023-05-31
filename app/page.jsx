import LoginScreenUser from './components/LoginScreenUser';
import ProfileFinder from './components/ProfileFinder';

export default function Home() {
  return (
    <main>
      <LoginScreenUser />
      <ProfileFinder goal="user" />
    </main>
  );
}
