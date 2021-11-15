import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CustomizedAccordions from './CustomizedAccordions';
import { Container } from '@mui/material';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'text.secondary' ,
        color: 'text.secondary',
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

const Services = () => {
  return (
      <Container>
          <div style={{ width: '100%' }}>
            <h1 className="text-center my-3">Best Craft Business Ideas</h1>
            <Box sx={{ display: 'flex', p: 1,}}>
              <Item sx={{ flexGrow: 1 }}>
                  <CustomizedAccordions></CustomizedAccordions>
              </Item>
            </Box>
          </div>
      </Container>
    
  );
}
export default Services;