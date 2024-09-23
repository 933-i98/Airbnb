import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "@/base-ui/indicator/style";
import PropTypes from "prop-types";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  useEffect(() => {
    //获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    // 获取content的宽度
    const contentWidth = contentRef.current.clientWidth;

    //获取selectIndex要滚动的距离
    const distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <div>
      <IndicatorWrapper>
        <div className="i-content" ref={contentRef}>
          {props.children}
        </div>
      </IndicatorWrapper>
    </div>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
