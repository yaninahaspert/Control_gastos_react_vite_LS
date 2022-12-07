import {formatearFecha} from "../helpers/index.js";
import {LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"
import IconoAhoro from "../img/icono_ahorro.svg"
import IconoCasa from "../img/icono_casa.svg"
import IconoComida from "../img/icono_comida.svg"
import IconoGastos from "../img/icono_gastos.svg"
import IconoOcio from "../img/icono_ocio.svg"
import IconoSalud from "../img/icono_salud.svg"
import IconoSubscripciones from "../img/icono_suscripciones.svg"


const diccionarioIconos={
    ahorro:IconoAhoro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    subscribciones: IconoSubscripciones,

}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {

    const leadringActions=()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>setGastoEditar(gasto)}> Editar</SwipeAction>
        </LeadingActions>
    )
    const trailingActions=()=>(
        <TrailingActions>
            <SwipeAction
                destructive={true}
                onClick={()=>eliminarGasto(gasto.id)}> Eliminar</SwipeAction>

        </TrailingActions>
    )
    return (
        <SwipeableList>
            <SwipeableListItem
            leadingActions={leadringActions()}
            trailingActions={trailingActions()}>
            <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img src={diccionarioIconos[gasto.categoria]}
                         alt="icono Gasto"
                    />
                    <div className="descripcion-gasto">
                        <p className="categoria">{gasto.categoria}</p>
                        <p className="nombre-gasto">{gasto.nombre}</p>
                        <p className="fecha-gasto">Agregado el: {""}<span>{formatearFecha(gasto.fecha)}</span></p>
                    </div>
                </div>
                <p className="cantidad-gasto">${gasto.cantidad}</p>
            </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
export default Gasto;
