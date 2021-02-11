import MaterialTable from "material-table";

const DataTable = (props) => {
  return (
    <MaterialTable
      options={{
        search: false,
        pageSize: 10,
        showTitle: false,
        showFirstLastPageButtons: false,
        // paging: false,
      }}
      columns={[
        {
          title: "Name",
          field: "name",
        },
      ]}
    />
  );
};

export default DataTable;
