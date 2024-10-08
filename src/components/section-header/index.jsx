import React, {memo} from 'react';
import {HeaderWrapper} from "@/components/section-header/style";
import PropTypes from "prop-types";

const SectionHeader = memo((props) => {
    const {title,subtitle}= props
    return (
        <HeaderWrapper>
            <h2 className="title">{title}</h2>
            {subtitle&&<h2 className="subtitle">{subtitle}</h2>}

        </HeaderWrapper>
    );
});
SectionHeader.propTypes={
    title:PropTypes.string,
    subtitle:PropTypes.string
}

export default SectionHeader;
