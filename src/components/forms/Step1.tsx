import type { FinanceData } from "../../types/finance";

interface Props {
  data: FinanceData;
  setData: React.Dispatch<React.SetStateAction<FinanceData>>;
}

export default function Step1({ data, setData }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label>Nome</label>

        <input
          className="w-full rounded-lg border p-3"
          value={data.nome}
          onChange={(e) =>
            setData({
              ...data,
              nome: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label>Idade</label>

        <input
          className="w-full rounded-lg border p-3"
          value={data.idade}
          onChange={(e) =>
            setData({
              ...data,
              idade: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label>Quantidade de filhos</label>

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          value={data.filhos}
          onChange={(e) =>
            setData({
              ...data,
              filhos: Number(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
}
