import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';

const orders = [

  {
    id: uuid(),
    matricule:"124 TN 5456",
    carburant: 1.44,
    depart:"Sfax",
    arrivee:"Sfax",
    date: 1555016400000,
    distance: 18
  },
  {
    id: uuid(),
    matricule:"124 TN 5456",
    carburant: 11.09,
    depart:"Sfax",
    arrivee:"Sousse",
    date: 1554930000000,
    distance: 138.6

  },
  {
    id: uuid(),
    matricule:"124 TN 5456",
    carburant: 12.2,
    depart:"Sousse",
    arrivee:"Tunis",
    date: 1554757200000,
    distance: 152.4

  },
  {
    id: uuid(),
    matricule:"124 TN 5456",
    carburant: 21.5,
    depart:"Tunis",
    arrivee:"Sfax",
    date: 1554670800000,
    distance: 268.2

  },

];

export const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Mes trajets" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>
                Matricule
              </TableCell>
              <TableCell>
                Depart
              </TableCell>
              <TableCell>
                Arrivée
              </TableCell>
              <TableCell>
                Distance (en km)
              </TableCell>
              <TableCell>
                Carburant (en L)    
              </TableCell>
              <TableCell>
                Date  
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
           <TableCell>
                  {order.matricule}
                </TableCell>
                <TableCell>
                  {order.depart}
                </TableCell>
                <TableCell>
                  {order.arrivee}
                </TableCell>
                <TableCell>
                  {order.distance}
                </TableCell>
                <TableCell>
                {order.carburant}

                </TableCell>
                <TableCell>
                  {format(order.date, 'dd/MM/yyyy')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
