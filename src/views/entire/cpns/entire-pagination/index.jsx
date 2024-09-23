import React, { memo } from "react";
import { PaginationWrapper } from "@/views/entire/cpns/entire-pagination/style";
import { Pagination } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual,
  );
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const totalPage = Math.ceil(totalCount / 20); //向上取整
  //点击按钮转换页面-事件逻辑
  const dispatch = useDispatch();

  function pageChangeHandle(event, pageCount) {
    window.scroll();
    dispatch(fetchRoomListAction(pageCount - 1));
  }

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第{startCount}-{endCount}个房源，共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
