import React, {useState} from 'react'
import FormDialog from './textDialog'

function Table() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCellIndex, setSelectedCellIndex] = useState(null);
  const [tableData, setTableData] = useState([
    ['', 'Tet-0.25', 'Tet-0.5', 'Tet-1', 'Azi-0.25', 'Azi-0.5', 'Azi-1', 'Blank', '+ve control', '', 'Empty'],
    ['A', 1, '', '', '', '', '', '', '', '', ''],
    // Add more rows as needed
  ]);


  const handleDialogOpen = (cellIndex) => {
    setSelectedCellIndex(cellIndex);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSaveValue = (value) => {
    if (selectedCellIndex !== null) {
      // Update the value in the specific cell
      const rowIndex = 1; // Assuming the row index is fixed at 1 for the example
      const updatedTableData = [...tableData];
      updatedTableData[rowIndex][selectedCellIndex] = value;
      setTableData(updatedTableData);
    }
    setSelectedValue(value);
    setSelectedCellIndex(null);
    setDialogOpen(false);
  };

  return (
    <div
    className="table-responsive"
    style={{
      overflow: "auto",
      fontFamily: "Corbel",
      marginTop: "-2px",
      marginInline: "20px",
      width: "96%",
    }}
  >
    <table className="sample-details" style={{ width: "100%" }}>
      <thead>
        <tr className="one">
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
        </tr>
      </thead>
      <tbody>
        {/* row 2 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">A</b>
          </td>
          <td>Tet-0.25</td>
          <td>Tet-0.5</td>
          <td>Tet-1</td>
          <td>Azi-0.25</td>
          <td>Azi-0.5</td>
          <td>Azi-1</td>
          <td>Blank</td>
          <td>+ve control</td>
          <td></td>
          <td>Empty</td>
        </tr>
        {/* row 2 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">A –pre Notes</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 3 */}
        <tr className="color_blue sampleTableDataRows" >
          <td>
            <b className="bold-text">B</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 4 */}
        <tr className="color_blue sampleTableDataRows">
          <td>
            <b className="bold-text">B –pre Notes</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 5 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">C</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 6 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">C –pre Notes</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
      </tbody>
    </table>
    <FormDialog open={dialogOpen} onClose={handleDialogClose} onSave={handleSaveValue} />
  </div>
  )
}

export default Table