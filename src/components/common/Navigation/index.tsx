import { NAV_ARRAY } from '@application/constant';
import { NavWrap, NavList, NavItem, NavIcon, NavName } from './style';
import { Link } from 'react-router-dom';

// TODO 클릭 시 svg 활성화 색상 변경
const Navigation = () => {
  return (
    <NavWrap>
      <NavList>
        {NAV_ARRAY.map(item => (
          <li key={item.name}>
            <Link to={item.path}>
              <NavItem>
                <NavIcon src={item.svg} />
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
