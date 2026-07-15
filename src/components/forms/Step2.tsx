import type { FinanceData } from "../../types/finance";

interface Props {
  data: FinanceData;
  setData: React.Dispatch<React.SetStateAction<FinanceData>>;
}

export default function Step2({ data, setData }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block">Renda Mensal</label>

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          value={data.renda}
          onChange={(e) => setData({ ...data, renda: Number(e.target.value) })}
        />
      </div>

      <div>
        <label className="mb-2 block">Recebe benefício?</label>

        <select
          className="w-full rounded-lg border p-3"
          value={data.beneficio}
          onChange={(e) => setData({ ...data, beneficio: e.target.value })}
        >
          <option value="">Selecione</option>
          <option>Não</option>
          <option>BPC</option>
          <option>Bolsa Família</option>
          <option>Outro</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block">Objetivo Financeiro</label>

        <input
          className="w-full rounded-lg border p-3"
          value={data.objetivo}
          onChange={(e) => setData({ ...data, objetivo: e.target.value })}
        />
      </div>
    </div>
  );
}
