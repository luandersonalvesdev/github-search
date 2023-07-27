import NavBarList from './NavBarList';
import NavBarUser from './NavBarUser';
import ButtonLogout from './ButtonLogout';

export default function NavBar() {
  return (
    <nav
      className="
        flex
        min-w-full
        justify-between
        items-center
        px-8
        py-2
        bg-white
        shadow-md
        "
    >
      <NavBarUser />
      <NavBarList />
      <ButtonLogout />
    </nav>
  );
}
