import styled from 'styled-components';

export const StyledHome = styled.div`
  font-size: 18px;
  padding: 20px;
  ul {
    list-style: none;
    li {
      a {
        color: #15c;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
      .note {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.64);
        font-style: italic;
      }
    }
  }
`;
