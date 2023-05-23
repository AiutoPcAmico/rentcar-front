import { InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { retrieveMachinesTypes } from "../api/handleAxios";

function SelectItems({ handleChange }) {
  const [machines, setMachines] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    retrieveMachinesTypes().then((mach) => {
      console.log(mach.data.value);
      setMachines(mach.data.value);
    });
  }, []);

  return (
    <div>
      <InputLabel id="select-type-id">Tipologia vettura</InputLabel>
      <Select
        labelId="select-type-id"
        id="select-type-machine"
        label="Tipologia Vettura"
        value={selected}
        onChange={(e) => {
          handleChange(e);
          console.log(e.target.value);
          setSelected(e.target.value);
        }}
      >
        {machines &&
          machines.map((element) => {
            return (
              <MenuItem value={element.id}>{element.machineType}</MenuItem>
            );
          })}
      </Select>
    </div>
  );
}

export { SelectItems };
