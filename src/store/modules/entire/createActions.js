import * as actionTypes from "./constants";
import { getEntireRoomList } from "@/services/modules/entire";

export const changeCurrentPageAction = (curentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  curentPage,
});
export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});
export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});
export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});
//网络请求封装成函数，在组件中调用
export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    //修改currentPage
    dispatch(changeCurrentPageAction(page));
    //根据页码获取最新的数据
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false));
    //获取到最新的数据，保存到redux的store中
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
