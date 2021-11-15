import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>CALLIGRAPHY BUSINESS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Calligraphy is the art of decorative writing. It is often used for invitations, signs, posters, and any other written material for special occasions. While anyone can master calligraphy with enough practice, it takes someone with solid marketing skills to turn it into a profitable business. There are various ways to make money with calligraphy, including selling products, teaching classes, and producing designs for clients.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>GREETING CARD BUSINESS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Greeting cards are a popular way to celebrate birthdays, holidays, reunions, and many other life events. Businesses specializing in greeting cards can sell directly to consumers through a website, or to retailers in bulk. In either case, the greeting card business is best for entrepreneurs with an eye for design, poetry, and marketing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>PICTURE FRAMING BUSINESS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Despite the rise of digital photography and cloud storage, picture frames continue to be a popular way to display art, family photos, and noteworthy documents. This kind of business requires knowledge of carpentry, design, color coordination, and customer service. Ideally, you should also have some experience working in print or photography.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}