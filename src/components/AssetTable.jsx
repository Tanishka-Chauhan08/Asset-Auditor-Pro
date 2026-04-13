import React from "react";

const AssetTable = ({ assets, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-slate-800 border border-slate-700 rounded-2xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-700 bg-slate-800/50">
            <th className="p-4 text-slate-400 font-semibold uppercase text-xs tracking-wider">
              Asset Name
            </th>
            <th className="p-4 text-slate-400 font-semibold uppercase text-xs tracking-wider">
              Type
            </th>
            <th className="p-4 text-slate-400 font-semibold uppercase text-xs tracking-wider">
              Status
            </th>
            <th className="p-4 text-slate-400 font-semibold uppercase text-xs tracking-wider">
              Assigned To
            </th>
            <th className="p-4 text-slate-400 font-semibold uppercase text-xs tracking-wider">
              Last Audit
            </th>
          </tr>
          <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Actions
          </th>
        </thead>
        <tbody className="divide-y divide-slate-700">
          {assets.map((asset) => (
            <tr
              key={asset.id}
              className="hover:bg-slate-700/30 transition-colors"
            >
              <td className="p-4 font-medium text-slate-200">
                {asset.name} <br />
                <span className="text-xs text-slate-500">{asset.serial}</span>
              </td>
              <td className="p-4 text-slate-300 text-sm">{asset.type}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    asset.status === "Compliant"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : asset.status === "Non-Compliant"
                        ? "bg-rose-500/10 text-rose-400"
                        : "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {asset.status}
                </span>
              </td>
              <td className="p-4 text-slate-300 text-sm">{asset.user}</td>
              <td className="p-4 text-slate-400 text-sm font-mono">
                {asset.lastAudit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                <button
                  onClick={() => onDelete(asset.id)}
                  className="text-rose-500 hover:text-rose-400 transition-colors font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
