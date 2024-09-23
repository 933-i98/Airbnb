import React, { memo } from "react";
import { LongforWrapper } from "@/views/home/cpns/home-longfor/style";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types"; // 注意这里导入了 prop-types 库
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list &&
            infoData.list.map((item) => {
              return <LongforItem itemData={item} key={item.city} />;
            })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;
