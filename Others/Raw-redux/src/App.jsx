import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { storeUsers } from "./store/user.action";

const MOKE_API_URL =
  "https://665445c21c6af63f46772c66.mockapi.io/api/v1/raw-redux/users";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const users = useSelector((state) => state.users);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      let response = await fetch(MOKE_API_URL, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      let data = await response.json();
      dispatch(storeUsers(data));
      localStorage.setItem("users", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users"));
    if (!users || users.length === 0) {
      if (localUsers) {
        // If users exist in local storage, use them
        dispatch(storeUsers(localUsers));
      } else {
        // Fetch users if not available in local storage
        fetchUsers();
      }
    }
  }, [dispatch, users]);

  console.log(users)


  return (
    <main className="main-container">
      <h3 className="heading">Users</h3>
      <div className="table-container">
        {users.length > 0 ? (
          <UserTable users={users} />
        ) : (
          <h6 className="h-6">{loading ? "Loading..." : "No users found"}</h6>
        )}
      </div>
    </main>
  );
}

export default App;
