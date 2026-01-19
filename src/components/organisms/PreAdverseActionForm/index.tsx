import React from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Stack,
  Divider,
} from "@mui/material";
import Button from "../../atoms/button";

import { AVAILABLE_CHARGES, ADVERSE_ACTION_CONTENT } from "./index.data";

interface AdverseActionFormProps {
  selectedCharges: string[];
  autoSendDays: number;
  onToggleCharge: (charge: string) => void;
  onDaysChange: (days: number) => void;
  onPreview: () => void;
}

export const AdverseActionForm: React.FC<AdverseActionFormProps> = ({
  selectedCharges,
  autoSendDays,
  onToggleCharge,
  onDaysChange,
  onPreview,
}) => {
  const isPreviewDisabled = selectedCharges.length === 0;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>From:</strong> {ADVERSE_ACTION_CONTENT.from}
          </Typography>

          <Typography variant="body2">
            <strong>To:</strong> {ADVERSE_ACTION_CONTENT.to}
          </Typography>

          <Typography variant="body2">
            <strong>Subject:</strong> {ADVERSE_ACTION_CONTENT.subject}
          </Typography>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        {/* Body */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          {ADVERSE_ACTION_CONTENT.greeting}
        </Typography>

        <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
          {ADVERSE_ACTION_CONTENT.description}
        </Typography>

        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
          Select The Charges For The Pre Adverse Action
        </Typography>

        <FormGroup sx={{ mb: 3 }}>
          {AVAILABLE_CHARGES.map((charge) => (
            <FormControlLabel
              key={charge}
              control={
                <Checkbox
                  size="small"
                  checked={selectedCharges.includes(charge)}
                  onChange={() => onToggleCharge(charge)}
                />
              }
              label={
                <Typography variant="body2" color="text.secondary">
                  {charge}
                </Typography>
              }
            />
          ))}
        </FormGroup>

        <Typography variant="body2" sx={{ mb: 2 }}>
          {ADVERSE_ACTION_CONTENT.footerText}
        </Typography>

        <Typography variant="body2">
          {ADVERSE_ACTION_CONTENT.closing.sincerely}
        </Typography>
        <Typography variant="body2">
          {ADVERSE_ACTION_CONTENT.closing.company}
        </Typography>
      </Box>

      <Box
        sx={{
          p: 2,
          bgcolor: "#F9FAFB",
          borderTop: "1px solid #E0E0E0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Auto send post adverse action
          </Typography>

          <TextField
            size="small"
            value={autoSendDays}
            onChange={(e) => onDaysChange(Number(e.target.value))}
            sx={{ width: 50 }}
          />

          <Typography variant="body2" color="text.secondary">
            Days
          </Typography>
        </Stack>

        <Button
          label="Preview Notice"
          disabled={isPreviewDisabled}
          onClick={onPreview}
          variant="contained"
      size='large' 
      sx={{width:'164px',height:'36px'}}
        />
      </Box>
    </Box>
  );
};
