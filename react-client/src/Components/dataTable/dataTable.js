import MaterialTable from "material-table";
import {
  FirstPage,
  LastPage,
  ChevronRight,
  ChevronLeft,
  Clear,
  Search,
  ArrowDownward,
} from "@material-ui/icons";
import { forwardRef } from "react";

export const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

export const DataTable = (props) => {
  return (
    <MaterialTable
      icons={tableIcons}
      columns={props.colData}
      options={props.optionsData}
      data={props.data}
      title={props.title}
    />
  );
};
