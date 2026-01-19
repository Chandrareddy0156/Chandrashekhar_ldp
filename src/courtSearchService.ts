import { MOCK_CANDIDATES } from "./mockUsers";

export const getCandidateById = (candidateId: string) => {
  return MOCK_CANDIDATES.find(c => c.id === candidateId);
};

export const getCandidateCourtSearches = (candidateId: string) => {
  return getCandidateById(candidateId)?.courtSearches ?? [];
};
