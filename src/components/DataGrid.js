/* eslint-disable react/prop-types */

import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const DataGrid = ({ rowData, columnDefs }) => {
  const defaultColDef = useMemo(() => ({
    sortable: true,
    resizable: true,
  }));

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ width: "100%", height: "471px" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
        />
      </div>
    </>
  );
};
