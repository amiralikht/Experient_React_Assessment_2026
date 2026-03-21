import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function App() {
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];
  return (
    <>
      <section className='center'>
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => 
            <TextField {...params} label="Movie" />
          }
        />
      </section>
    </>
  )
}

export default App
