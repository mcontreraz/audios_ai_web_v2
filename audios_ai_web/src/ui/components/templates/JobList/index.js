import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";

const createData = (id, name, status, created_at) => {
  return { id, name, status, created_at };
};

const JobListTemplate = ({ jobs, handleClick, handleClose, open, message }) => {
  const rows = jobs.map((job) =>
    createData(job.id, job.name, job.status, job.created_at)
  );

  return (
    <Box display="flex" justifyContent="center" paddingTop={5}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      />
      <TableContainer component={Paper} sx={{ maxWidth: "80%" }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Archivo</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Fecha Creación</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)", // color de fondo en el hover
                  },
                  cursor: "pointer", // Cambia el cursor a un puntero para indicar que es clickeable
                }}
                onClick={() => handleClick(row.id)} // Manejador de clic para la fila
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default JobListTemplate;
