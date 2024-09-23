import React, { memo, useEffect } from "react";
import { EntireWrapper } from "@/views/entire/style";
import EntireFilter from "@/views/entire/cpns/entire-filter";
import EntirePagination from "@/views/entire/cpns/entire-pagination";
import EntireRooms from "@/views/entire/cpns/entire-rooms";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";
import { useDispatch } from "react-redux";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
