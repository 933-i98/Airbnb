import { LeftWrapper } from "@/components/app-header/c-cpns/header-left/style";
import Icon_logo from "@/assets/svg/icon_logo";

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo((props) => {
  const navigate = useNavigate();

  function logoClickHandle() {
    navigate("/home");
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <Icon_logo />
      </div>
    </LeftWrapper>
  );
});

HeaderLeft.propTypes = {};

export default HeaderLeft;
