import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Alert,
  Stack,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import Button from "../../atoms/button";
import CloseIcon from "@mui/icons-material/Close";
import AttachmentIcon from "@mui/icons-material/Attachment";

interface PreviewNoticeModalProps {
  open: boolean;
  charges: string[];
  autoSendDays: number;
  onClose: () => void;
  onSubmit: () => void;
}

export const PreviewNoticeModal: React.FC<PreviewNoticeModalProps> = ({
  open,
  charges,
  onClose,
  onSubmit,
  autoSendDays,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box
        sx={{
          px: 3,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Typography fontWeight={600}>Pre-Adverse Action Notice</Typography>

        <IconButton size="small" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <DialogContent sx={{ px: 4, py: 3 }}>
        <Stack spacing={0.5} mb={2}>
          <Typography variant="caption">
            <strong>From:</strong> Chandra@Checkr.Com
          </Typography>
          <Typography variant="caption">
            <strong>To:</strong> John.Smith@Checkr.Com
          </Typography>
          <Typography variant="caption">
            <strong>Subject:</strong> Pre-Adverse Action Notice - Checkr-bpo
          </Typography>
        </Stack>

        <Alert
          severity="error"
          icon={false}
          sx={{
            backgroundColor: "#FDECEC",
            color: "#B42318",
            fontSize: "12px",
            mb: 3,
          }}
        >
          • Please carefully review the list of charges (in bold) and your
          contact information.
          <br />• Please note that we will send the corresponding post adverse
          action email automatically after {autoSendDays} days.
        </Alert>

        <Typography variant="body2" mb={2}>
          Dear John Smith,
        </Typography>

        <Typography variant="body2" mb={2}>
          You recently authorized Checkr-bpo (“the company”) to obtain consumer
          reports and/or investigate consumer reports about you from a consumer
          reporting agency. The Company is considering taking action in whole or
          in part on information in such report(s) including the following
          specific items identified in the report prepared by Checkr, Inc.
        </Typography>

        <Stack spacing={1} mb={3}>
          {charges.map((charge) => (
            <Typography key={charge} variant="body2" fontWeight={600}>
              • {charge}
            </Typography>
          ))}
        </Stack>

        <Typography variant="body2" mb={3}>
          If you wish to dispute the accuracy of the information in the report
          directly with the consumer reporting agency (i.e., the source of the
          information contained in the report), you should contact the agency
          identified above directly.
        </Typography>

        <Typography variant="body2" mb={3}>
          Sincerely,
          <br />
          Checkr-bpo
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography fontWeight={600} variant="subtitle2" mb={1}>
          Attachments
        </Typography>

        <Stack spacing={1}>
          {["Summary of right under the FCRA", "Copy of background report"].map(
            (item) => (
              <Stack key={item} direction="row" spacing={1} alignItems="center">
                <AttachmentIcon
                  sx={{
                    fontSize: 16,
                    transform: "rotate(45deg)",
                    color: "#6B7280",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#2563EB", cursor: "pointer" }}
                >
                  {item}
                </Typography>
              </Stack>
            )
          )}
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button label="Submit Notice" onClick={onSubmit} size="large"  sx={{width:'164px',height:'36px'}}/>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
