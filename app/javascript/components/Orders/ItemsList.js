import React,{useState, useEffect} from 'react'
import { Typography, Modal, Box, Button,Stack,
  List, ListItem, ListItemText,ListItemIcon, 
  } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import axios from 'axios';

import { useLogin } from '../../helpers/useLogin';
import { BASE_URL, COLORS } from '../../constants';

const ItemsList = ({open, handleClose, currentOrder}) => {
  const [items, setItems] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('');
  const token = useLogin();
  useEffect(()=>{
    if(currentOrder!='') fetchItems();
    if(open===false) setLoading(true);
  },[currentOrder, open])

  const fetchItems = async () => {
    const url = `${BASE_URL}/api/v2/orders/${currentOrder}`
    axios.get(url, { headers: { token: token } })
     .then(response => {
        console.log(response.data.data)
          setOrder(response.data.data)
          setItems(response.data.data.attributes.order_items);
          setLoading(false);
        })
     .catch((error) => {
        console.log('error'+ error);
      });
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {order ===''? '':
            <Button variant='text' href={`/orders/${order.id}`}>
              {order.attributes.order_number}
            </Button>
          } 
        </Typography>
        <List>
          {
            loading ? (
              <ListItem >
                <ListItemText>Loading...</ListItemText>
              </ListItem>
            ):
            (
              items.map((item,index)=>(
                <ListItem key={index}>
                  <ListItemIcon>
                    <RestaurantIcon/>
                  </ListItemIcon>
                  <ListItemText>
                    <Stack direction="row" spacing={2}>
                      <Typography>
                        {item.name} 
                      </Typography>
                      <Typography
                        sx={{color: COLORS.PRIMARY}}
                      >
                        {item.quantity}x
                      </Typography>
                    </Stack>
                  </ListItemText>
                </ListItem>
              ))
            )
          }
        </List>
      </Box>
    </Modal>
  )
}

export default ItemsList
