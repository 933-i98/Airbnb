import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    display: flex;
    transition: transform 200ms ease;
    position: relative;

    > * {
      flex-shrink: 0;
    }
  }
`;
