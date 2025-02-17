import TableRow from "./TableRow";

const Table = () => {
  const rows = [
    { imc: "Menos de 17", class: "Muito abaixo do peso" },
    { imc: "Entre 17 e 18,49", class: "Abaixo do peso" },
    { imc: "Entre 18,5 e 24,99", class: "Peso normal" },
    { imc: "Entre 25 e 29,99", class: "Acima do peso" },
    { imc: "Entre 30 e 34,99", class: "Obesidade I" },
    { imc: "Entre 35 e 39,99", class: "Obesidade II (severa)" },
    { imc: "Acima de 40", class: "Obesidade III (mórbida)" },
  ];

  return (
    <table className="border border-cinza w-5/6 h-1/2 md:w-2/3">
      <thead>
        <tr className="text-main bg-cinza text-left">
          <th scope="col" className="px-3 md:text-xl">
            IMC
          </th>
          <th scope="col" className="px-3 md:text-xl">
            Classificação
          </th>
        </tr>
      </thead>
      <tbody className="text-sm md:text-lg">
        {rows.map((row, index) => (
          <TableRow key={index} imc={row.imc} class={row.class} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
