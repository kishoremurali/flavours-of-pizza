import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
