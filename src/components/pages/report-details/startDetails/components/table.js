import React, { useState, useEffect } from "react";
import {Row, Col, Button} from 'react-bootstrap';

function Table() {
  const [jsonData, setJsonData] = useState([])
    
  useEffect(() => {
    
  }, []);

  function getJson() {
    const data = 
      [
        localStorage.getItem("GFSID"),
        {
        A: [
          document.getElementById("A0").value,
          document.getElementById("A1").value,
          document.getElementById("A2").value,
          document.getElementById("A3").value,
          document.getElementById("A4").value,
          document.getElementById("A5").value,
          document.getElementById("A6").value,
          document.getElementById("A7").value,
          document.getElementById("A8").value,
          document.getElementById("A9").value,
        ],
      },
      {
        "A-OD": [
          document.getElementById("A-od-0").value,
          document.getElementById("A-od-1").value,
          document.getElementById("A-od-2").value,
          document.getElementById("A-od-3").value,
          document.getElementById("A-od-4").value,
          document.getElementById("A-od-5").value,
          document.getElementById("A-od-6").value,
          document.getElementById("A-od-7").value,
          document.getElementById("A-od-8").value,
          document.getElementById("A-od-9").value,
        ],
      },
      {
        "A-post-Notes": [
          document.getElementById("A-post-0").value,
          document.getElementById("A-post-1").value,
          document.getElementById("A-post-2").value,
          document.getElementById("A-post-3").value,
          document.getElementById("A-post-4").value,
          document.getElementById("A-post-5").value,
          document.getElementById("A-post-6").value,
          document.getElementById("A-post-7").value,
          document.getElementById("A-post-8").value,
          document.getElementById("A-post-9").value,
        ],
      },
      {
        B: [
          document.getElementById("B0").value,
          document.getElementById("B1").value,
          document.getElementById("B2").value,
          document.getElementById("B3").value,
          document.getElementById("B4").value,
          document.getElementById("B5").value,
          document.getElementById("B6").value,
          document.getElementById("B7").value,
          document.getElementById("B8").value,
          document.getElementById("B9").value,
        ],
      },
      {
        "B-OD": [
          document.getElementById("B-od-0").value,
          document.getElementById("B-od-1").value,
          document.getElementById("B-od-2").value,
          document.getElementById("B-od-3").value,
          document.getElementById("B-od-4").value,
          document.getElementById("B-od-5").value,
          document.getElementById("B-od-6").value,
          document.getElementById("B-od-7").value,
          document.getElementById("B-od-8").value,
          document.getElementById("B-od-9").value,
        ],
      },
      {
        "B-post-Notes": [
          document.getElementById("B-post-0").value,
          document.getElementById("B-post-1").value,
          document.getElementById("B-post-2").value,
          document.getElementById("B-post-3").value,
          document.getElementById("B-post-4").value,
          document.getElementById("B-post-5").value,
          document.getElementById("B-post-6").value,
          document.getElementById("B-post-7").value,
          document.getElementById("B-post-8").value,
          document.getElementById("B-post-9").value,
        ],
      },
      {
        C: [
          document.getElementById("C0").value,
          document.getElementById("C1").value,
          document.getElementById("C2").value,
          document.getElementById("C3").value,
          document.getElementById("C4").value,
          document.getElementById("C5").value,
          document.getElementById("C6").value,
          document.getElementById("C7").value,
          document.getElementById("C8").value,
          document.getElementById("C9").value,
        ],
      },
      {
        "C-OD": [
          document.getElementById("C-od-0").value,
          document.getElementById("C-od-1").value,
          document.getElementById("C-od-2").value,
          document.getElementById("C-od-3").value,
          document.getElementById("C-od-4").value,
          document.getElementById("C-od-5").value,
          document.getElementById("C-od-6").value,
          document.getElementById("C-od-7").value,
          document.getElementById("C-od-8").value,
          document.getElementById("C-od-9").value,
        ],
      },
      {
        "C-post-Notes": [
          document.getElementById("C-post-0").value,
          document.getElementById("C-post-1").value,
          document.getElementById("C-post-2").value,
          document.getElementById("C-post-3").value,
          document.getElementById("C-post-4").value,
          document.getElementById("C-post-5").value,
          document.getElementById("C-post-6").value,
          document.getElementById("C-post-7").value,
          document.getElementById("C-post-8").value,
          document.getElementById("C-post-9").value,
        ],
      }
    ]
    console.log(data,"table data");

    // fetch(, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   cors: "no-cors",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let newdata = data["result"];
    //     console.log(newdata);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  }
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
            <td>
              <input id="A0" type="text" className="form-control" />
            </td>
            <td>
              <input id="A1" type="text" className="form-control" />
            </td>
            <td>
              <input id="A2" type="text" className="form-control" />
            </td>
            <td>
              <input id="A3" type="text" className="form-control" />
            </td>
            <td>
              <input id="A4" type="text" className="form-control" />
            </td>
            <td>
              <input id="A5" type="text" className="form-control" />
            </td>
            <td>
              <input id="A6" type="text" className="form-control" />
            </td>
            <td>
              <input id="A7" type="text" className="form-control" />
            </td>
            <td>
              <input id="A8" type="text" className="form-control" />
            </td>
            <td>
              <input id="A9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 2 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">A – OD</b>
            </td>
            <td>
              <input id="A-od-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-od-9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 3 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">A –post Notes</b>
            </td>
            <td>
              <input id="A-post-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-post-9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 4 */}
          <tr className="color_blue sampleTableDataRows">
            <td>
              <b className="bold-text">B</b>
            </td>
            <td>
              <input id="B0" type="text" className="form-control" />
            </td>
            <td>
              <input id="B1" type="text" className="form-control" />
            </td>
            <td>
              <input id="B2" type="text" className="form-control" />
            </td>
            <td>
              <input id="B3" type="text" className="form-control" />
            </td>
            <td>
              <input id="B4" type="text" className="form-control" />
            </td>
            <td>
              <input id="B5" type="text" className="form-control" />
            </td>
            <td>
              <input id="B6" type="text" className="form-control" />
            </td>
            <td>
              <input id="B7" type="text" className="form-control" />
            </td>
            <td>
              <input id="B8" type="text" className="form-control" />
            </td>
            <td>
              <input id="B9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 5 */}
          <tr className="color_blue sampleTableDataRows">
            <td>
              <b className="bold-text">B – OD</b>
            </td>
            <td>
              <input id="B-od-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-od-9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 6 */}
          <tr className="color_blue sampleTableDataRows">
            <td>
              <b className="bold-text">B –post Notes</b>
            </td>
            <td>
              <input id="B-post-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-post-9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 7 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">C</b>
            </td>
            <td>
              <input id="C0" type="text" className="form-control" />
            </td>
            <td>
              <input id="C1" type="text" className="form-control" />
            </td>
            <td>
              <input id="C2" type="text" className="form-control" />
            </td>
            <td>
              <input id="C3" type="text" className="form-control" />
            </td>
            <td>
              <input id="C4" type="text" className="form-control" />
            </td>
            <td>
              <input id="C5" type="text" className="form-control" />
            </td>
            <td>
              <input id="C6" type="text" className="form-control" />
            </td>
            <td>
              <input id="C7" type="text" className="form-control" />
            </td>
            <td>
              <input id="C8" type="text" className="form-control" />
            </td>
            <td>
              <input id="C9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 8 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">C – OD</b>
            </td>
            <td>
              <input id="C-od-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-od-9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 9 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">C –post Notes</b>
            </td>
            <td>
              <input id="C-post-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-post-9" type="text" className="form-control" />
            </td>
          </tr>
        </tbody>
      </table>
      <Row>
        <Col className="text-center mt-4">
          <Button
              type="submit"
              className="mx-2 menu-btn menu-btn2"
              onClick={getJson}
            >
              Save
            </Button>
        </Col>
        </Row>
    </div>
  );
}

export default Table;
