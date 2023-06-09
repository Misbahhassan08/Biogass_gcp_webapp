import { Button } from "react-bootstrap";

function CSVRows(props) {
  console.log(props.rowsData, "this is csv Rows Data");
  return props.rowsData.map((data, index) => {
    return (
      <tr key={index} className="TableDataRows">
        <td>
          <input type="text" value={"1"} readOnly className="form-control" />
        </td>
        <td>
          <input
            type="text"
            value={data.RPIID}
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={data.CsvfileID}
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={data.CsvfileDirectory}
            // value="1234"
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <Button
            type="submit"
            className="mx-2 menu-btn menu-btn1"
            onClick={() => {
              props.checkData();
            }}
          >
            CSV
          </Button>
        </td>
      </tr>
    );
  });
}
export default CSVRows;
