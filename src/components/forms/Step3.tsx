import type { FinanceData } from "../../types/finance";

interface Props {
  data: FinanceData;
  setData: React.Dispatch<React.SetStateAction<FinanceData>>;
}

const campos = [
  ["Moradia", "moradia"],
  ["Alimentação", "alimentacao"],
  ["Terapias", "terapias"],
  ["Medicamentos", "medicamentos"],
  ["Transporte", "transporte"],
  ["Escola", "escola"],
  ["Outros", "outros"],
] as const;

export default function Step3({ data, setData }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {campos.map(([label, campo]) => (
        <div key={campo}>
          <label className="mb-2 block">{label}</label>

          <input
            type="number"
            className="w-full rounded-lg border p-3"
            value={data[campo]}
            onChange={(e) =>
              setData({
                ...data,
                [campo]: Number(e.target.value),
              })
            }
          />
        </div>
      ))}
    </div>
  );
}
