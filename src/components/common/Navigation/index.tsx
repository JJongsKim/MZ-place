import { NAV_ARRAY } from '@application/constant';
import { NavWrap, NavList, NavItem, NavIcon, NavName } from './style';

// TODO 클릭 시 svg 활성화 색상 변경
const Navigation = () => {
  return (
    <NavWrap>
      <NavList>
        {NAV_ARRAY.map(item => (
          <li key={item.name}>
            <NavItem>
              <NavIcon src={item.svg} />
              <NavName>{item.name}</NavName>
            </NavItem>
          </li>
        ))}
      </NavList>
    </NavWrap>
  );
};

export default Navigation;
