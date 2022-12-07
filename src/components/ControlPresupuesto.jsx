import {useEffect, useState} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos, setGastos,setPresupuesto, setIsvalidPresupuesto}) => {
    const [disponible, setDisponibles] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje]=useState(0)


    useEffect(() => {
            const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
            const totalDisponible = presupuesto - totalGastado;

            const nuevoPorcentaje=(((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2)

            setGastado(totalGastado)
            setDisponibles(totalDisponible)
        setTimeout(()=>{
            setPorcentaje(nuevoPorcentaje)
        },1500)


        }, [gastos]
    )

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    const hableResetarApp=()=>{
        const resultado=confirm("desear reiniciar")
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsvalidPresupuesto(false)
      }
    }
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div> <CircularProgressbar
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            styles={buildStyles(
                {
                    pathColor: porcentaje >100 ? "DC2626" : "#3882F6",trailColor:"F5F5F5", textColor:porcentaje >100 ? "DC2626" : "#3882F6"})}
            />
            </div>
            <div className="contenido-presupuesto">
                <button className="reset-app"
                type="button"
                onClick={hableResetarApp}>
                    Resetear App
                </button>
                <p><span>Presupuesto:</span>{formatearCantidad(presupuesto)}</p>
                <p className={`${disponible < 0 ? "negativo" : ""}`}><span>Disponible:</span>{formatearCantidad(disponible)}</p>
                <p><span>Gastado:</span>{formatearCantidad(gastado)}</p>
            </div>
        </div>
    )
}
export default ControlPresupuesto;
