import React, {useState} from 'react';
import {DatePicker, TimePicker, DateTimePicker} from "@material-ui/pickers"


const App = () => {

	const [fechaSeleccionada, setFechaSelerccionada] = useState(new Date ()); 
	

	return (
		<div className="contenedor">
			<div className="grupo">
				<label>Fecha</label>
				<DatePicker value={fechaSeleccionada} onChange={setFechaSelerccionada}/>
			</div>

			<div className="grupo">
				<label>Hora</label>
				<TimePicker value={fechaSeleccionada} onChange={setFechaSelerccionada}/>
			</div>
			
			<div className="grupo">
				<label>Fecha y Hora</label>
				<DateTimePicker value={fechaSeleccionada} onChange={setFechaSelerccionada}/>
			</div>
		</div>
	);
}
 
export default App;