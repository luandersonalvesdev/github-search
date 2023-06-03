import NavBarList from './NavBarList';
import NavBarUser from './NavBarUser';
import ButtonLogout from './ButtonLogout';

export default function NavBar() {
  return (
    <nav>
      <NavBarUser />
      <NavBarList />
      <ButtonLogout />
    </nav>
  );
}
