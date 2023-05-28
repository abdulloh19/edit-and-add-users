import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function ModalPage({
  modalVisible,
  toggle,
  onSubmit,
  isOpen,
  toggleModal,
  EditSave,
}) {
  return (
    <div>
      <Modal isOpen={modalVisible} toggle={toggle}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <form id="id" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="FirstName"
              className="form-control"
              name="FirstName"
            />
            <input
              type="text"
              placeholder="LastName"
              className="form-control my-4"
              name="LastName"
            />
            <input
              type="text"
              placeholder="UserName"
              className="form-control"
              name="UserName"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button form="id" className="btn btn-success">
            Save
          </button>
          <button className="btn btn-danger" onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader>Edit User</ModalHeader>
        <ModalBody>
          <form id="id2" onSubmit={EditSave}>
            <input
              type="text"
              placeholder="FirstName"
              className="form-control"
              label="FirstName"
              name="FirstName"
            />
            <input
              type="text"
              placeholder="LastName"
              className="form-control my-4"
              label="LastName"
              name="LastName"
            />
            <input
              type="text"
              placeholder="UserName"
              className="form-control"
              name="UserName"
              label="UserName"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button form="id2" className="btn btn-success">
            Edit User
          </button>
          <button className="btn btn-danger" onClick={toggleModal}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPage;
