import { styled } from 'styled-components';

const CustomFilterForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`;

const FilterTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const FilterTitle = styled.p`
  margin-bottom: 10px;
  ${({ theme }) => theme.font.B_14};
`;

const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 10px 8px;
  }
`;

const FilterButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export { CustomFilterForm, FilterTypeContainer, FilterTitle, FilterList, FilterButtonWrap };
