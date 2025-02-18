import React from "react";
import { useForm } from "react-hook-form";
import Label from "./Label";
import { useState } from "react";
import Result from "./Result";
const Form = () => {
  const [isActive, setIsActive] = useState(false);
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      peso: "",
      altura: "",
    },
  });

  const peso = watch("peso") || 0;
  const altura = watch("altura") || 0;
  const alturaEmMetros = altura / 100;
  let imc;
  const calcularIMC = () => {
    if (peso <= 0 || altura <= 0) return "Aguardando dados...";
    return (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log((imc = calcularIMC()));
  };

  return (
    <div>
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label
          name="Peso (em kg)"
          placeholder="70"
          register={register("peso", { required: true })}
        />
        {errors.peso && (
          <span className="text-red-500">Este campo é obrigatório</span>
        )}
        <Label
          name="Altura (em cm)"
          placeholder="175"
          register={register("altura", { required: true })}
        />
        {errors.altura && (
          <span className="text-red-500">Este campo é obrigatório</span>
        )}
        <button
          onClick={() => setIsActive(!isActive)}
          type="submit"
          className="bg-main text-white w-2/3 rounded-sm font-bold p-2 mt-3 lg:w-1/4 
             border border-main transition-all duration-300 ease-in-out 
             hover:bg-white hover:text-main hover:scale-105 hover:shadow-md"
        >
          Calcular
        </button>
        <p
          className={`opacity-50 w-5/6 text-center ${isActive ? "hidden" : ""}`}
        >
          Saiba agora se está no seu peso ideal!
        </p>
      </form>
      {/* Tabela de Resultados */}
      <div className={`w-full flex justify-center ${isActive ? "" : "hidden"}`}>
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
              <td>{peso > 0 ? peso : "Aguardando dados..."} kg</td>
              <td>{alturaEmMetros > 0 ? alturaEmMetros : "Aguardando dados..."} m</td>
              <td>{calcularIMC()}</td>
              <td>
                {peso === 0 || altura === 0
                  ? "Aguardando dados..."
                  : calcularIMC() < 17
                  ? "Muito abaixo do peso"
                  : calcularIMC() < 18.5
                  ? "Abaixo do peso"
                  : calcularIMC() < 24.9
                  ? "Peso normal"
                  : calcularIMC() < 29.9
                  ? "Sobrepeso"
                  : calcularIMC() < 34.9
                  ? "Obesidade I"
                  : calcularIMC() < 39.9
                  ? "Obesidade II"
                  : "Obesidade III"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
