import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page.Mui-selected {
      margin: 0 9px;
      background-color: #222;
      color: #fff;
    }

    .desc {
      margin-top: 16px;
    }
  }
`;
