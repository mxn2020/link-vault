import { FolderClosed, Plus } from "lucide-react";
const collections = [
    { id: "1", name: "Design Inspiration", count: 42, color: "#3B82F6" },
    { id: "2", name: "Startup Reading", count: 15, color: "#10B981" },
    { id: "3", name: "React Ecosystem", count: 87, color: "#06B6D4" },
    { id: "4", name: "To Read Later", count: 4, color: "#F59E0B" }
];
export default function CollectionsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><FolderClosed style={{ color: "var(--color-accent-primary)" }} /> Collections</h1>
            <button className="btn btn-primary"><Plus size={16} /> New Collection</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-4)" }}>
            {collections.map(c => (<div key={c.id} className="card" style={{ padding: "var(--space-5)", cursor: "pointer", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-sm)", background: `${c.color}20`, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <FolderClosed size={24} style={{ color: c.color, fill: `${c.color}30` }} />
                </div>
                <div>
                    <h3 style={{ fontSize: "17px", fontWeight: 600 }}>{c.name}</h3>
                    <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: 2 }}>{c.count} items</p>
                </div>
            </div>))}
        </div>
    </div>);
}
