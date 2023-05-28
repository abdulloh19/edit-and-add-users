import { useState } from "react";
import ModalPage from "./ModalPage";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editData, setEditData] = useState("");
  const [data, setData] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    count: 0,
    active: false,
  });

  const toggle = () => {
    setModalVisible((prev) => !prev);
  };

  function modalOpen() {
    setEditModalOpen((prev) => !prev);
  }

  function onSubmit(event) {
    event.preventDefault();
    const u = user;
    u.firstName = event.target[0].value;
    u.lastName = event.target[1].value;
    u.userName = event.target[2].value;
    u.id = data.length + 1;
    setUser({ ...u });
    const a = data;
    a.push(user);
    setData([...a]);
    setModalVisible(false);
  }

  function plus(index) {
    data[index].count = data[index].count + 1;
    setData([...data]);
  }
  function minus(index) {
    data[index].count = data[index].count - 1;
    setData([...data]);
  }

  function Actives(id) {
    data.map((item, index) => {
      if (id === index) {
        item.active = !item.active;
        setData([...data]);
      }
    });
  }

  function ActiveSearch(event) {
    setActiveSearch(event.target.checked);
  }

  function Search(event) {
    setSearch(event.target.value);
  }

  function Delete(index) {
    data.splice(index, 1);
    setData([...data]);
  }

  function Edit(item) {
    setEditData(item);
    console.log(item);
    setEditModalOpen((prev) => !prev);
  }

  function EditSave(event) {
    event.preventDefault();
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const userName = event.target[2].value;
    data.map((item) => {
      if (item.id === editData.id) {
        item.firstName = firstName;
        item.lastName = lastName;
        item.userName = userName;
      }
    });

    setData([...data]);
    setEditModalOpen(!editModalOpen);
  }
  return (
    <div className="container my-4">
      <div className="row  ">
        <div className="col-md-3">
          <input
            onChange={Search}
            type="search"
            placeholder="Search..."
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <label id="form" style={{ fontSize: "20px" }}>
            Active
          </label>
          <input
            form="form"
            checked={activeSearch}
            onChange={ActiveSearch}
            className="mx-3"
            style={{ transform: "scale(1.5)" }}
            type="checkbox"
          />
        </div>
        <div className="col-md-6">
          <button className="btn btn-success float-end" onClick={toggle}>
            Add User
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ModalPage
            modalVisible={modalVisible}
            toggle={toggle}
            onSubmit={onSubmit}
            isOpen={editModalOpen}
            toggleModal={modalOpen}
            EditSave={EditSave}
          />
        </div>
      </div>
      <div className="col-md-12 my-3">
        <table className="table table-bordered table-dark border">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>UserName</th>
              <th>Count</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item, index) => {
                if (search === "") {
                  return item;
                } else if (
                  (item.firstName
                    .toUpperCase()
                    .includes(search.toUpperCase()) ||
                    item.lastName
                      .toUpperCase()
                      .includes(search.toUpperCase()) ||
                    item.userName
                      .toUpperCase()
                      .includes(search.toUpperCase())) &&
                  item.active === activeSearch
                ) {
                  return item;
                }
              })
              .map((item, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.userName}</td>
                  <td>
                    <button
                      className="btn btn-outline-info mx-2"
                      onClick={() => plus(index)}
                    >
                      +
                    </button>
                    {item.count}
                    <button
                      className="btn btn-outline-info mx-2"
                      onClick={() => minus(index)}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => Actives(index)}
                      style={{ transform: "scale(1.5)" }}
                      checked={item.active}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => Edit(item)}
                    >
                      edit
                    </button>

                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => Delete(item)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
