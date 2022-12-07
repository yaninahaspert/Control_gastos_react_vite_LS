import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto.jsx";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos}) => {

    return (
        <header>
            <h1>Planificador de gastos</h1>
            {isValidPresupuesto ? (
                <ControlPresupuesto
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setIsvalidPresupuesto={setIsValidPresupuesto}
                />) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    isValidPresupuesto={isValidPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}

        </header>
    )
}

export default Header;
