import { Library, Plus, Search, MoreHorizontal, ExternalLink } from "lucide-react";
const links = [
    { id: "1", title: "The Anatomy of a Frame", url: "https://figma.com/blog", domain: "figma.com", tags: ["design", "figma", "ui"], date: "2h ago" },
    { id: "2", title: "How to build a SaaS in 7 days", url: "https://news.ycombinator.com", domain: "news.ycombinator.com", tags: ["saas", "indiehackers", "startup", "dev"], date: "1d ago" },
    { id: "3", title: "PostgreSQL vs MySQL performance benchmarks 2026", url: "https://supabase.com/blog", domain: "supabase.com", tags: ["database", "sql"], date: "3d ago" },
    { id: "4", title: "Color Theory for Web Designers", url: "https://refactoringui.com", domain: "refactoringui.com", tags: ["design", "color", "ux"], date: "1w ago" },
    { id: "5", title: "Why Rust is taking over the backend", url: "https://rust-lang.org", domain: "rust-lang.org", tags: ["rust", "backend"], date: "2w ago" }
];
export default function AllLinksPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Library style={{ color: "var(--color-accent-primary)" }} /> All Links</h1>
            <button className="btn btn-primary"><Plus size={16} /> Add Link</button>
        </div>

        <div style={{ display: "flex", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flex: 1, background: "var(--color-bg-card)", padding: "4px 12px", borderRadius: "var(--radius-full)", border: "1px solid var(--color-border)" }}>
                <Search size={18} style={{ color: "var(--color-text-tertiary)" }} />
                <input type="text" placeholder="Search titles, URLs, or content..." style={{ border: "none", background: "transparent", width: "100%", padding: "8px 4px", outline: "none", fontSize: "15px", color: "var(--color-text-primary)" }} />
            </div>
            <button className="btn">Filter</button>
            <button className="btn">Sort: Newest</button>
        </div>

        <div className="masonry-grid">
            {links.map(link => (<div key={link.id} className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ height: 140, background: "var(--color-bg-tertiary)", borderTopLeftRadius: "calc(var(--radius-md) - 1px)", borderTopRightRadius: "calc(var(--radius-md) - 1px)", display: "flex", justifyContent: "center", alignItems: "center", color: "var(--color-text-tertiary)" }}>
                    [Screenshot Placeholder]
                </div>
                <div style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-2)" }}>
                        <h3 style={{ fontSize: "16px", fontWeight: 600, lineHeight: 1.3, flex: 1, paddingRight: "var(--space-2)" }}>{link.title}</h3>
                        <button className="btn btn-ghost btn-sm" style={{ padding: 4, marginRight: -4 }}><MoreHorizontal size={18} /></button>
                    </div>
                    <a href={link.url} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "var(--space-3)", textDecoration: "none" }} className="hover:text-accent-primary">
                        <img src={`https://icon.horse/icon/${link.domain}`} alt="" style={{ width: 14, height: 14, borderRadius: 2 }} onError={(e) => e.currentTarget.style.display = 'none'} />
                        {link.domain} <ExternalLink size={12} />
                    </a>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "auto", paddingTop: "var(--space-3)" }}>
                        {link.tags.map(t => <span key={t} className="tag">#{t}</span>)}
                    </div>
                </div>
            </div>))}
        </div>
    </div>);
}
