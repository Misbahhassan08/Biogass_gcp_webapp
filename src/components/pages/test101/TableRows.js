function TableRows({rowsData}) {
    return(
        
        rowsData.map((data, index)=>{

            return(

            <tr  key={index}>
                <td><input type="text" value={data.Data_Point} readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Sample_Num}  readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Time_Stamp}  readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Time_Per} readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Temp} readOnly   className="form-control"/> </td>
                <td><input type="text" value={data.Gain} readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Int_Time} readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Allowable_Dev}  readOnly  className="form-control"/> </td>
                

                <td><input type="text" value={data.Raw_Used_Vio} readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Raw_Values_Vio_450nm}  readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Raw_Selected_Vio_450nm}  readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Raw_Avg_Vio_450nm} readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Raw_StdDev_Vio_450nm}  readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Call_Used_Vio} readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Call_Values_Vio_450nm} readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Cal_Selected_Vio_450nm}  readOnly className="form-control"/> </td>
                <td><input type="text" value={data.Cal_Avg_Vio_450nm} readOnly   className="form-control"/> </td>
                <td><input type="text" value={data.Cal_StdDev_Vio_450nm} readOnly   className="form-control" /> </td>


                <td><input type="text" value={data.Raw_Used_Vio} readOnly   className="form-control"/> </td>
                <td><input type="text" value={data.Raw_Values_Blu_500nm} readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Raw_Selected_Blu_500nm}  readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Raw_Avg_Blu_500nm} readOnly className="form-control"/> </td>
                <td><input type="text" value={data.Raw_StdDev_Blu_500nm}  readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Call_Used_Blu} readOnly   className="form-control" /> </td>
                <td><input type="text" value={data.Call_Values_Blu_500nm}  readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Cal_Selected_Blu_500nm} readOnly className="form-control"/> </td>
                <td><input type="text" value={data.Cal_Avg_Blu_500nm} readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Cal_StdDev_Blu_500nm} readOnly  className="form-control" /> </td>

                <td><input type="text" value={data.Raw_Used_Grn} readOnly   className="form-control"/> </td>
                <td><input type="text" value={data.Raw_Values_Grn_550nm} readOnly   className="form-control" /> </td>
                <td><input type="text" value={data.Raw_Selected_Grn_550nm} readOnly   className="form-control" /> </td>
                <td><input type="text" value={data.Raw_Avg_Grn_550nm} readOnly className="form-control"/> </td>
                <td><input type="text" value={data.Raw_StdDev_Grn_550nm} readOnly  className="form-control"/> </td>
                <td><input type="text" value={data.Call_Used_Grn} readOnly   className="form-control" /> </td>
                <td><input type="text" value={data.Call_Values_Grn_550nm}  readOnly  className="form-control" /> </td>
                <td><input type="text" value={data.Cal_Selected_Grn_550nm} readOnly   className="form-control"/> </td>
                <td><input type="text" value={data.Cal_Avg_Grn_550nm}  readOnly className="form-control"/> </td>
                <td><input type="text" value={data.Cal_StdDev_Grn_550nm} readOnly  className="form-control" /> </td>
           
            
            
            </tr>
            )
        })
   
    )
    
}
export default TableRows;
