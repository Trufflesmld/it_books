import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { SelectedBookPageView } from "../components/SelectedBookPageView/SelectedBookPageView";
import { selectedBookSelector } from "../selectors";
import { getSelectedBookRequest } from "../slice";

export const SelectedBookPage = () => {
  const { isbn } = useParams();
  const dispatch = useAppDispatch();
  const { bookIformation } = useAppSelector(selectedBookSelector);
  console.log(bookIformation);

  useEffect(() => {
    dispatch(getSelectedBookRequest(isbn));
  }, [dispatch, isbn]);

  return <SelectedBookPageView {...bookIformation} />;
};
