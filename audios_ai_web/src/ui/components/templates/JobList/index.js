import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Grid,
  TextField,
} from "@mui/material";
import Icon from "../../atoms/Icon"; // Asumiendo que tienes un componente Icon
import TextInput from "../../molecules/TextInput";
import PageTitle from "../../atoms/PageTitle";

const JobListTemplate = ({
  jobs,
  page,
  rowsPerPage,
  count,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <div className="container">
      <PageTitle title="Archivos" />
      <div className="row d-flex justify-content-center">
        <div className="row">
          <div className="col-6">
            <TextInput label="Buscar" className={"mb-4"} />
          </div>
        </div>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "90%" }}
          className="table bordered shadow rounded"
        >
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Archivo</TableCell>
                <TableCell align="right">Fecha Creación</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow
                  className="table-row"
                  key={job.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                    cursor: "pointer",
                    fontFamily: "Poppins",
                    fontSize: "0.9rem",
                  }}
                  // onClick={() => handleClick(row.id)} // Puedes pasar la función handleClick si es necesario
                >
                  <TableCell component="th" scope="row">
                    {job.name}
                  </TableCell>
                  <TableCell align="right">{job.created_at}</TableCell>
                  <TableCell align="right">
                    <Icon iconName="eye" className={"px-2 text-primary"} />
                    <Icon iconName="trash" className={"px-2 text-danger"} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>

    // <Box display="flex" flexDirection="column">
    //   <Box display="flex" justifyContent="start" paddingTop={3}>
    //     Page Title
    //   </Box>

    //   <Box sx={{ flexGrow: 1 }}>
    //     <Grid container spacing={2}>
    //       <Grid item xs={12} sm={6} md={5} lg={3}>
    //         <TextField label="Buscar" variant="standard" fullWidth />
    //       </Grid>
    //     </Grid>
    //   </Box>
    //   <Box display="flex" justifyContent="center" paddingTop={5}>

    //   </Box>
    //   <Box display="flex" justifyContent="center" paddingTop={5}>

    //   </Box>
    // </Box>
  );
};

export default JobListTemplate;
