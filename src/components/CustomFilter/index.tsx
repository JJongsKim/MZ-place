import { ACTIVE_TASTE, MINI_FILTER, REGION_ARRAY } from '@application/constant';
import {
  CustomFilterWrap,
  FilterButtonWrap,
  FilterList,
  FilterTitle,
  FilterTypeContainer,
} from './style';
import Chip from '@components/common/Chip';
import ButtonBase from '@components/common/ButtonBase';

const CustomFilter = () => {
  return (
    <CustomFilterWrap>
      <FilterTypeContainer>
        <FilterTitle>유료/무료 여부</FilterTitle>
        <FilterList>
          {MINI_FILTER[0].filters.map(item => (
            <li key={item}>
              <Chip size="small" value={item} />
            </li>
          ))}
        </FilterList>
      </FilterTypeContainer>
      <FilterTypeContainer>
        <FilterTitle>활동 취향</FilterTitle>
        <FilterList>
          {ACTIVE_TASTE.map(item => (
            <li key={item}>
              <Chip size="small" value={item} />
            </li>
          ))}
        </FilterList>
      </FilterTypeContainer>
      <FilterTypeContainer>
        <FilterTitle>활동 지역</FilterTitle>
        <FilterList>
          {REGION_ARRAY.map(item => (
            <li key={item}>
              <Chip size="small" value={item} />
            </li>
          ))}
        </FilterList>
      </FilterTypeContainer>
      <FilterButtonWrap>
        <ButtonBase type="button" name="적용하기" />
      </FilterButtonWrap>
    </CustomFilterWrap>
  );
};

export default CustomFilter;
