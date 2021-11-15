import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useHistory, useLocation } from 'react-router';

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(255, 0, 0, 0.1)'
            : 'rgb(255 132 132 / 25%)',
      }}
    />
  );
}

const AddProduct = () => {
    const initialInfo = { productname:'',price:'',rating: '',img:'' }
    const [addingInfo, setAddingInfo] = React.useState(initialInfo);
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from ||'/';

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addingInfo };
        newInfo[field] = value;
        setAddingInfo(newInfo);
    }
    const handleAddingSubmit = e => {
        // collect data
        e.preventDefault();
        // send to the server
        const url=`https://young-everglades-47177.herokuapp.com/addProducts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Insert Success!")
                    history.push(redirect_url);
                }
            });
        
    }
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '25ch' },
                }}
                >
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Add A Product
                </Typography>
                <form onSubmit={handleAddingSubmit}>
                    <RedBar />
                    <TextField 
                    name="productname"
                    onBlur={handleOnBlur}
                    label={'Product Name'}
                    id="margin-normal" 
                    margin="normal" 
                    />
                    <RedBar />
                    <TextField 
                    name="price"
                    onBlur={handleOnBlur}
                    label={'Product Price'} 
                    id="margin-normal" 
                    margin="normal" 
                    />
                    <RedBar />
                    <TextField 
                    name="rating"
                    onBlur={handleOnBlur}
                    label={'Product Rating'} 
                    id="margin-normal" 
                    margin="normal" 
                    />
                    <RedBar />
                    <TextField 
                    name="img"
                    onBlur={handleOnBlur}
                    label={'Product Image URL'} 
                    id="margin-normal" 
                    margin="normal" 
                    />
                    <RedBar />
                    <Button type="submit" variant="contained">ADD PRODUCT</Button>
                </form>
            </Box>
            
        </div>
    );
};

export default AddProduct;
