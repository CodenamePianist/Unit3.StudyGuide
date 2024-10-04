import { createBrowserRouter } from "react-router-dom";
import PartyList from "./PartyList";
import AddParty from "./AddParty";
import PartyDetails from "./PartyDetails";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PartyList />,
      },
      {
        path: "/parties",
        element: <PartyList />,
      },
      {
        path: "/parties/new",
        element: <AddParty />,
      },
      {
        path: "/parties/:id",
        element: <PartyDetails />,
      },
    ],
  },
]);

export default router;
