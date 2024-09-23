import React, { memo } from "react";
import { SectionV1Wrapper } from "@/views/home/cpns/home-section-v1/style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import PropTypes from "prop-types";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propType = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;
