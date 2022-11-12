import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    id: uuid(),
    name: 'Renault',
    matricule: '124 TN 5456',
    modele: "Clio 4"
  },
  {
    id: uuid(),
    name: 'Renault',
    matricule: '73 TN 3294',
    modele: "megane 3"
  },
  {
    id: uuid(),
    name: 'Peaugot',
    matricule: '124 TN 5456',
        modele: "301"
  },
  {
    id: uuid(),
    name: 'Dacia',
    matricule: '185 TN 8585',
        modele: "logan"
  },

];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Mes voitures"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
       
          <ListItemText
            primary={product.name}
            secondary={`${product.modele}`}
          />
           <div>
            {product.matricule}
            </div>
       
        </ListItem>
      ))}
    </List>
    <Divider />

  </Card>
);
