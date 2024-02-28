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
  Pagination,
  Typography,
  Stack,
} from "@mui/material";
import Icon from "../../atoms/Icon"; // Asumiendo que tienes un componente Icon
import TextInput from "../../molecules/TextInput";
import PageTitle from "../../atoms/PageTitle";

const JobListTemplate = ({ jobs, page, handleChangePage, totalPages }) => {
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
          sx={{ maxWidth: "90%", paddingBottom: "40px" }}
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
        <div className="row">
          <div className="col">
            <Stack spacing={2}>
              <Pagination
                variant="outlined"
                shape="rounded"
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} de ${count}`
                }
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListTemplate;
