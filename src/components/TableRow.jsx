import React from "react";

const TableRow = ({ imc, class: classificacao, index }) => {
  const rowClass = index % 2 === 1 ? "bg-cinza" : "";

  return (
    <tr className={rowClass}>
      <td className="px-3">{imc}</td>
      <td className="px-3">{classificacao}</td>
    </tr>
  );
};

export default TableRow;
