import { useAppSelector } from "../../app/hooks";
import { selectedBookSelector } from "../../pages/SelectedBook/selectors";

export const BookTitle = () => {
  const { bookIformation } = useAppSelector(selectedBookSelector);
  return <div>{bookIformation && bookIformation.title}</div>;
};
