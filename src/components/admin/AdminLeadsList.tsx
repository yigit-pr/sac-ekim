import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

export default function AdminLeadsList() {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/leads')
            .then(res => res.json())
            .then(data => {
                setLeads(data);
                setLoading(false);
            })
            .catch(err => setLoading(false));
    }, []);

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-slate-800">Gelen Başvurular</h2>
                <Button onClick={() => window.location.reload()}>Yenile</Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="p-4 font-semibold text-slate-600">ID</th>
                            <th className="p-4 font-semibold text-slate-600">İsim Soyisim</th>
                            <th className="p-4 font-semibold text-slate-600">Telefon</th>
                            <th className="p-4 font-semibold text-slate-600">Tarih</th>
                            <th className="p-4 font-semibold text-slate-600">Durum</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {leads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-slate-50/50">
                                <td className="p-4 text-slate-500">#{lead.id}</td>
                                <td className="p-4 font-medium text-slate-900">{lead.fullName}</td>
                                <td className="p-4 text-slate-600">{lead.phone}</td>
                                <td className="p-4 text-slate-500">
                                    {new Date(lead.createdAt).toLocaleDateString('tr-TR')}
                                </td>
                                <td className="p-4">
                                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">
                                        {lead.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {leads.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-slate-500">Henüz başvuru yok.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
