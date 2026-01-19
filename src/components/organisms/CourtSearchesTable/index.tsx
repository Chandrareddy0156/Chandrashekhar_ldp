// organisms/CourtSearchesTable.tsx
import { Box } from "@mui/material";
import Typography from "../../atoms/typography";
import { StatusRow } from "../../molecules/courtSearches";
import type { SearchStatus } from "../../molecules/courtSearches";
import { getCandidateCourtSearches } from "../../../courtSearchService";

interface RawCourtSearch {
  s: string;
  st: SearchStatus;
  d: string;
}

interface Props {
  candidateId: string;
}

export const CourtSearchesTable: React.FC<Props> = ({ candidateId }) => {
  const rawData: RawCourtSearch[] =
    getCandidateCourtSearches(candidateId);

  const rows = rawData.map(item => ({
    searchName: item.s,
    status: item.st,
    date: item.d,
  }));

  return (
    <Box sx={{ p: 3, border: "1px solid #E5E7EB", borderRadius: "8px", mt: 3 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
        Court Searches
      </Typography>

      <Box sx={{ display: "flex", mb: 1 }}>
        <Typography componentType="captionHeader" sx={{ flex: 1 }}>
          Search
        </Typography>
        <Typography componentType="captionHeader" sx={{ flex: 1 }}>
          Status
        </Typography>
        <Typography componentType="captionHeader" sx={{ flex: 1 }}>
          Date
        </Typography>
      </Box>

      {rows.length === 0 ? (
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
          No court searches available
        </Typography>
      ) : (
        rows.map(row => (
          <StatusRow
            key={`${row.searchName}-${row.date}`}
            {...row}
          />
        ))
      )}
    </Box>
  );
};
