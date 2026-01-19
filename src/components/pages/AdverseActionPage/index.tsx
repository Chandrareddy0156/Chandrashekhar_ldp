import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../templates/mainLayout";
import { AdverseActionForm } from "../../organisms/PreAdverseActionForm";
import { PreviewNoticeModal } from "../../organisms/previewNoticeModal";
import { SuccessModal } from "../../organisms/successModal";

const PreAdverseActionPage = () => {
  const navigate = useNavigate();

  const [selectedCharges, setSelectedCharges] = useState<string[]>([]);
  const [autoSendDays, setAutoSendDays] = useState<number>(7);
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [isSuccessOpen, setSuccessOpen] = useState(false);

  const handleToggleCharge = (charge: string) => {
    setSelectedCharges((prev) =>
      prev.includes(charge)
        ? prev.filter((c) => c !== charge)
        : [...prev, charge]
    );
  };

  // Preview Model
  const handlePreview = () => {
    setPreviewOpen(true);
  };

  return (
    <MainLayout>
      <Stack spacing={3}>
        {/* Header */}
        <Stack direction="row" spacing={1} alignItems="center">
          <ArrowBackIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
          <Typography variant="h6">Pre-Adverse Action Notice</Typography>
        </Stack>

        {/* Form */}
        <AdverseActionForm
          selectedCharges={selectedCharges}
          autoSendDays={autoSendDays}
          onToggleCharge={handleToggleCharge}
          onDaysChange={setAutoSendDays}
          onPreview={handlePreview}
        />
      </Stack>

      {/* Preview Modal */}
      <PreviewNoticeModal
        open={isPreviewOpen}
        charges={selectedCharges}
        autoSendDays={autoSendDays}
        onClose={() => setPreviewOpen(false)}
        onSubmit={() => {
          setPreviewOpen(false);
          setSuccessOpen(true);
        }}
      />

      {/* success model */}
      <SuccessModal
        open={isSuccessOpen}
        onClose={() => {
          setSuccessOpen(false);
          navigate(-1);
        }}
      />
    </MainLayout>
  );
};

export default PreAdverseActionPage;
