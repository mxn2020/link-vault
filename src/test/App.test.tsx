import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import AllLinksPage from "../pages/AllLinksPage"; import CollectionsPage from "../pages/CollectionsPage"; import SearchPage from "../pages/SearchPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("Link Vault")).toBeInTheDocument(); });
    it("AllLinksPage renders", () => { wrap(<AllLinksPage />); expect(screen.getAllByText("The Anatomy of a Frame")[0]).toBeInTheDocument(); });
    it("CollectionsPage renders", () => { wrap(<CollectionsPage />); expect(screen.getByText("Design Inspiration")).toBeInTheDocument(); });
    it("SearchPage renders", () => { wrap(<SearchPage />); expect(screen.getAllByText("Search & Tags")[0]).toBeInTheDocument(); });
});
