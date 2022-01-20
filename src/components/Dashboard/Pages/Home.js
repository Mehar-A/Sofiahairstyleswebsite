import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
/*
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
*/
import './style.css'
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
//import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function Home() {

  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), title: '', des: '' ,TextBut: ''},
  ]);

  const [printValues, setPrintValues] = useState("");
  
//setDetails({...details, username: e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    const newP = document.createElement("p");
    //console.log(inputFields[0].des);
    setPrintValues( inputFields[0].des);
    newP.textContent = printValues;
    //console.log(newP);
    document.getElementById("Print").appendChild(newP);

    setPrintValues( inputFields[0].des);
    console.log(printValues);
    /*
    const NewValues = inputFields.map(i =>{
    
      //console.log("new print:\n" + i.des);
      for (var j = 0; j < i.des.length; j++) {
        //console.log(i.des[j]+"\n");
        
        if(i.des[j] === "\n"){
          //setPrintValues[j] = "\n";
        }
      }
      console.log(printValues);
      return 0;
    })
    */
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      //console.log(i);
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  
  return (
    <div className="home">

      <Container>
      <h1>Add Home Information</h1>
      <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      >
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
              name="title"
              label="Title"
              variant="filled"
              value={inputField.title}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
          </div>
        )) }

        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
              name="des"
              label="description"
              variant="filled"
              value={inputField.des}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
          </div>
        )) }

      { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
              name="TextBut"
              label="ButtonText"
              variant="filled"
              value={inputField.TextBut}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
          </div>
        )) }
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit"
          onClick={handleSubmit}
        >Send</Button>
      </Box>

      <div className='Print' id='Print'>

      </div>
    </Container>

    </div>
  );
}

export default Home;
