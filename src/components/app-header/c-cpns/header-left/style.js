import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  border-bottom: 1px solid #eee;
  color: ${props => props.theme.color.primaryColor};


  .logo {
    cursor: pointer;
  }
`
