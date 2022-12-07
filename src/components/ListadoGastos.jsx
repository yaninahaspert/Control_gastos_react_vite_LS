import Gasto from "./Gasto.jsx";

const ListadoGastos = ({gastos, setGastoEditar, eliminarGastos, filtros, gastosFiltrado}) => {
    return (
        <div className="listado-gastos contenedor">

            {
                filtros ? (
                    <>
                        <h2>{gastosFiltrado.length ? "Gastos" : "No hay gastos en esta categoria"}</h2>

                    {gastosFiltrado.map(gasto => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGastos}
                        />
                    ))}
                    </>

                ) : (
                    <>
                        <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>
                        {gastos.map(gasto => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGastos}/>
                    ))}
                    </>
                )
            }
        </div>
    )
}
export default ListadoGastos