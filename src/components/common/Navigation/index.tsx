import { NAV_ARRAY } from '@application/constant';
import { NavWrap, NavList, NavItem, NavName, NavIcon } from './style';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <NavWrap>
      <NavList>
        {NAV_ARRAY.map(item => (
          <li key={item.name}>
            <Link to={item.path}>
              <NavItem>
                <NavIcon $active={location.pathname === item.path}>
                  <item.svg />
                </NavIcon>
                <NavName>{item.name}</NavName>
              </NavItem>
            </Link>
          </li>
        ))}
      </NavList>
    </NavWrap>
  );
};

export default Navigation;
