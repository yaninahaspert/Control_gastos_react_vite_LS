const Filtros = ({filtros, setFiltros}) => {
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filtar Gastos
                        <select
                        value={filtros}
                        onChange={e=>setFiltros(e.target.value)}>
                            <option value="">--Todas las categorias--</option>
                            <option value="comida">Comida</option>
                            <option value="casa">Casa</option>
                            <option value="ocio">Ocio</option>
                            <option value="salud">Salud</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="subscripciones">Subscripciones</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    )
}
export default Filtros;