import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="Promoções" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="Novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        confimar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
