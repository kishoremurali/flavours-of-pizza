import Header from "./Header";
import CartOveriew from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Spinner />}
      <Header />
      <div className="overflow-scroll">
        <main>
          <Outlet />
        </main>
      </div>
      <CartOveriew />
    </div>
  );
}

export default AppLayout;
