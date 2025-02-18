import React from "react";
import Table from "../components/Table";
import Form from "../components/Form";
import Result from "../components/Result";
import { useState } from "react";

const Calculator = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-cinza h-screen flex items-center justify-center">
      <section className="bg-white h-screen flex flex-col items-center justify-center font-roboto font-medium text-text gap-7 md:text-lg lg:w-4xl lg:h-80/100 rounded-sm lg:py-[50px]">
        <h1>Calculadora de IMC</h1>
        {/* Formulário para dados do usuário */}
        <Form />
        
        {/* Tabela de referência */}
        <Table />
      </section>
    </div>
  );
};

export default Calculator;
