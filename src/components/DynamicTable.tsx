import type { ColumnsProps } from "kamey-components";
import { DynamicTable } from "kamey-components";
import { FaUser } from "react-icons/fa";

const columns: ColumnsProps[] = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Edad",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Direccion",
    dataIndex: "address",
    key: "address",
  },
];

const data = [
  {
    key: "1",
    name: "Juan",
    age: 32,
    address: "Calle 123",
  },
  {
    key: "2",
    name: "Pedro",
    age: 42,
    address: "Calle 456",
  },
  {
    key: "3",
    name: "Maria",
    age: 22,
    address: "Calle 789",
  },
];

const DynamicTablePage = () => {
  return (
    <div className="p-2 flex justify-center items-center w-full">
      <DynamicTable
        title={
          <>
            <h4 className="text-sm">Lista de usuarios</h4>
          </>
        }
        description="Lista de usuarios"
        icon={<FaUser />}
        columns={columns}
        data={data}
        showRefreshButton
      />
    </div>
  );
};

export default DynamicTablePage;
