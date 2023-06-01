import NavBarList from './NavBarList';
import NavBarUser from './NavBarUser';

export default function NavBar() {
  return (
    <nav>
      <NavBarUser />
      <NavBarList />
    </nav>
  );
}
