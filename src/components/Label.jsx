const Label = ({ name, placeholder, register }) => {
  return (
    <div className="flex flex-col w-screen items-center">
      <label className="text-left w-2/3 lg:w-1/4">{name}</label>
      <input
        type="number"
        placeholder={placeholder}
        {...register} // Agora o registro está correto
        className="appearance-none border border-(--color-main) px-3 py-1 w-2/3 lg:w-1/4 rounded-sm focus:outline-hidden"
      />
    </div>
  );
};

export default Label;
