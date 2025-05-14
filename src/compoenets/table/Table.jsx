
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TaskTable({ tasks }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="task table">
        <TableHead className='bg-zinc-400 text-white '>
          <TableRow >
            
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Task Name</strong></TableCell>
            <TableCell><strong>Departments</strong></TableCell>
            <TableCell><strong>Created Date</strong></TableCell>
            <TableCell><strong>Target Date</strong></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
            
              <TableCell>{task.task}</TableCell>
              <TableCell>{task.state.charAt(0).toUpperCase() + task.state.slice(1)}</TableCell>
              <TableCell>{task.createDate || "—"}</TableCell>
              <TableCell>{task.endDate || "—"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TaskTable.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      createDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
};

export default TaskTable;
