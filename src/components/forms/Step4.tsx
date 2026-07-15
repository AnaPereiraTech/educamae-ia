import type { FinanceData } from "../../types/finance";

interface Props {
  data: FinanceData;
  setData: React.Dispatch<React.SetStateAction<FinanceData>>;
}

export default function Step4({ data, setData }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block">Meta Financeira (R$)</label>

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          value={data.meta}
          onChange={(e) =>
            setData({
              ...data,
              meta: Number(e.target.value),
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block">Prazo</label>

        <select
          className="w-full rounded-lg border p-3"
          value={data.prazo}
          onChange={(e) =>
            setData({
              ...data,
              prazo: e.target.value,
            })
          }
        >
          <option value="">Selecione</option>
          <option>6 meses</option>
          <option>1 ano</option>
          <option>2 anos</option>
          <option>5 anos</option>
        </select>
      </div>
    </div>
  );
}
