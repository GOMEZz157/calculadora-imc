import React from "react";

const Result = () => {
  return (
    <div className="w-full flex justify-center hidden">
      <table className="text-sm p-3 w-5/6 flex flex-col lg:w-2/3">
        <thead className="border-b-2 border-main w-full">
          <tr className="flex w-full px-4 py-2 justify-between md:gap-[1px] md:text-lg">
            <th scope="col" className="">
              Peso
            </th>
            <th scope="col" className="">
              Altura
            </th>
            <th scope="col" className="">
              IMC
            </th>
            <th scope="col">Resultado</th>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr className="flex w-full px-4 py-2 justify-between md:text-lg">
          <td>{peso > 0 ? peso : "Aguardando dados..."}</td>
                <td>{altura > 0 ? altura.toFixed(2) : "Aguardando dados..."}</td>
                <td>{calcularIMC()}</td>
                <td>
                  {peso === 0 || altura === 0
                    ? "Aguardando dados..."
                    : calcularIMC() < 18.5
                    ? "Abaixo do peso"
                    : calcularIMC() < 24.9
                    ? "Peso normal"
                    : calcularIMC() < 29.9
                    ? "Sobrepeso"
                    : "Obesidade"}
                </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Result;
