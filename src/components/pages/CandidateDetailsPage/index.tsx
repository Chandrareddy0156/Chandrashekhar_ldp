import { Stack, Accordion, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { CourtSearchesTable } from "../../organisms/CourtSearchesTable";

import Text from "../../atoms/typography";
import Button from "../../atoms/button";
import IconButton from "../../atoms/iconButton";
import MainLayout from "../../templates/mainLayout";

const CandidateDetailsPage = () => {
  const navigate = useNavigate();

  
  const candidateId = "john-smith";

  return (
    <MainLayout>
      <Stack spacing={3} mt={4}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton icon={<ArrowBackIcon />} onClick={() => navigate(-1)} />
            <Text variant="h5">John Smith</Text>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              label="Pre-Adverse Action"
              variant="contained"
              sx={{
                height: "36px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "6px",
                textTransform: "none",
              }}
              onClick={() => navigate(`/adverse-action/${candidateId}`)}
            />
            <Button
              label="Engage"
              sx={{
                height: "36px",
                borderRadius: "6px",
                textTransform: "none",
              }}
            />
          </Stack>
        </Stack>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Text variant="subtitle1">Candidate Information</Text>
          </AccordionSummary>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Text variant="subtitle1">Report Information</Text>
          </AccordionSummary>
        </Accordion>

        <CourtSearchesTable candidateId={candidateId} />
      </Stack>
    </MainLayout>
  );
};

export default CandidateDetailsPage;
