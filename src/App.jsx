import Header from "./components/Header.jsx";
import IconoNuevoGasto from "./img/nuevo-gasto.svg"
import {useEffect, useState} from "react";
import {generarId} from "./helpers/index.js";
import Modal from "./components/Modal.jsx";
import ListadoGastos from "./components/ListadoGastos.jsx";
import Filtros from "./components/Filtros.jsx";

function App() {
    const [gastos, setGastos] = useState(localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : [])

    const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem("presupuesto")) ?? 0)
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const [gastoEditar, setGastoEditar] = useState({})
    const [filtros, setFiltros] = useState("")
    const [gastosFiltrados, setGastosFiltrados] = useState([])


    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setModal(true)
            setTimeout(() => {
                setAnimarModal(true)
            }, 500)
        }

    }, [gastoEditar])


    useEffect(() => {
        localStorage.setItem("presupuesto", presupuesto ?? 0)
    }, [presupuesto])

    useEffect(() => {
        localStorage.setItem("gastos", JSON.stringify(gastos) ?? [])
    }, [gastos])

    useEffect(() => {
        if (filtros) {
            const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtros)
            setGastosFiltrados(gastosFiltrados)
        }

    }, [filtros])

    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
        if (presupuestoLS > 0) {
            setIsValidPresupuesto(true)
        }
    }, [])

    const handleNuevoGasto = () => {
        setModal(true)
        setGastoEditar({})

        setTimeout(() => {
            setAnimarModal(true)
        }, 500)
    }
    const guardarGasto = (gasto) => {
        if (gasto.id) {
            const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
            setGastos(gastosActualizados)
            setGastoEditar({})
        } else {
            gasto.id = generarId();
            gasto.fecha = Date.now();
            setGastos([...gastos, gasto])
        }
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500)
    }
    const eliminarGastos = id => {
        const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
        setGastos(gastosActualizados)
    }
    return (
        <div className={modal ? "fijar" : ""}>
            <Header
                setGastos={setGastos}
                gastos={gastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}/>

            {isValidPresupuesto && (
                <>
                    <main>
                        <Filtros
                            setFiltros={setFiltros}
                            filtros={filtros}/>
                        <ListadoGastos
                            filtros={filtros}
                            gastosFiltrado={gastosFiltrados}
                            gastos={gastos}
                            setGastoEditar={setGastoEditar}
                            eliminarGastos={eliminarGastos}/>
                    </main>
                    <div className="nuevo-gasto">
                        <img src={IconoNuevoGasto}
                             alt="icono nuevo gasto"
                             onClick={handleNuevoGasto}/>
                    </div>
                </>
            )}
            {modal && <Modal
                setGastoEditar={setGastoEditar}
                modal={modal}
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                guardarGasto={guardarGasto}
                gastoEditar={gastoEditar}
            />}

        </div>
    )
}

export default App;
