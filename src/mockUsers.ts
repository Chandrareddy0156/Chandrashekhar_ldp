import type { SearchStatus } from "./components/molecules/courtSearches";

export interface CandidateCourtSearch {
  s: string;
  st: SearchStatus;
  d: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  courtSearches: CandidateCourtSearch[];
}

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: "john-smith",
    name: "John Smith",
    email: "john@test.com",
    courtSearches: [
      { s: "SSN Verification", st: "CLEAR", d: "2/22/2026" },
      { s: "Sex Offender", st: "CONSIDER", d: "3/13/2026" }
    ]
  },
  {
    id: "jane-doe",
    name: "Jane Doe",
    email: "jane@test.com",
    courtSearches: [
      { s: "Global Watchlist", st: "CLEAR", d: "4/02/2026" }
    ]
  }
];
