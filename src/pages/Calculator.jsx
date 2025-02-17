import React, { useState } from "react";
import Label from "../components/Label";
import TableRow from "../components/TableRow";
import Table from "../components/Table";

const Calculator = () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  return (
    <div className="bg-cinza h-screen flex items-center justify-center">
      {/* main-section */}
      <section className="bg-white h-screen flex flex-col items-center justify-center font-roboto font-medium text-text gap-7 md:text-lg lg:w-4xl lg:h-80/100 rounded-sm lg:py-[50px]">
        <h1 className="">Calculadora de IMC</h1>
        {/* Conteúdo principal */}
        <form className="flex flex-col items-center gap-3">
          <Label name={"Peso"} placeholder={"KG"} />
          <Label name={"Altura"} placeholder={"CM"} />
          <button
            type="submit"
            className="bg-main text-white w-2/3 rounded-sm font-bold p-2 mt-3 lg:w-1/4 
             border border-main transition-all duration-300 ease-in-out 
             hover:bg-white hover:text-main hover:scale-105 hover:shadow-md"
          >
            Calcular
          </button>
        </form>
        {/* Resultados */}
        <p className="opacity-50 w-2/3 text-center">
          Saiba agora se está no seu peso ideal!
        </p>
        {/* <div>
          <table>
            <tr>
              <thead>
                <tr>
                  <th scope="col">Peso</th>
                  <th scope="col">Altura</th>
                  <th scope="col">IMC</th>
                  <th scope="col">Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>60</td>
                  <td>1,65</td>
                  <td>22.04</td>
                  <td>Peso normal</td>
                </tr>
              </tbody>
            </tr>
          </table>
        </div> */}

        {/* Tabela de IMCs */}
        <Table />
      </section>
    </div>
  );
};

export default Calculator;
