import { Hash, Search } from "lucide-react";
import { Card, Badge } from "@geenius-ui/react-css";

const tags = [
    { name: "design", count: 125 }, { name: "react", count: 98 }, { name: "startup", count: 45 },
    { name: "css", count: 42 }, { name: "typescript", count: 38 }, { name: "backend", count: 24 },
    { name: "database", count: 19 }, { name: "inspiration", count: 15 }, { name: "tools", count: 12 }
];

export default function SearchPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1400 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Hash style={{ color: "var(--color-accent-primary)" }} /> Search & Tags</h1>

        <Card padding="md" className="search-hero">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-4)" }}>
                <Search size={24} style={{ color: "var(--color-text-tertiary)", marginTop: 4 }} />
                <div style={{ flex: 1 }}>
                    <input type="text" placeholder="Full-text search across all saved links..." style={{ border: "none", background: "transparent", width: "100%", fontSize: "24px", fontWeight: 600, color: "var(--color-text-primary)", outline: "none", marginBottom: "var(--space-2)" }} />
                    <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>We index the title, description, and the full text content of every page you save.</p>
                </div>
            </div>
        </Card>

        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "var(--space-4)", marginTop: "var(--space-8)" }}>Popular Tags</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
            {tags.map(t => (<Card key={t.name} padding="sm" hover>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <span style={{ fontSize: "15px", fontWeight: 500 }}>#{t.name}</span>
                    <Badge variant="secondary" size="sm">{t.count}</Badge>
                </div>
            </Card>))}
        </div>
    </div>);
}
