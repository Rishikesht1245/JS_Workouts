import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { storeUsers } from "./store/user.action";

const MOKE_API_URL = 'https://665445c21c6af63f46772c66.mockapi.io/api/v1/raw-redux/users';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  let users = useSelector((state) => state.users);
  if(users?.length === 0) users = JSON.parse(localStorage?.getItem("users"));

  const fetchUsers = async () => {
    setLoading(true);
    try {
      let response = await fetch(MOKE_API_URL, {
        method: "GET"
      });
      let data = await response.json();
      dispatch(storeUsers(data));
    } catch (error) {
      console.error('Error fetching users:', error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    if(!users && users?.length === 0){
      fetchUsers();
    }else {
      // store in store
      dispatch(storeUsers(users))
    }
  }, [dispatch]);

  return (
    <main className="main-container">
      <h3 className="heading">Users</h3>
      <div className="table-container">
        {!loading && users.length > 0 ? (
          <UserTable users={users} />
        ) : (
          <h6 className="h-6">Loading...</h6>
        )}
      </div>
    </main>
  );
}

export default App;
