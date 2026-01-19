import React from 'react';
import { Dialog, DialogContent, Box } from '@mui/material';
import Text from '../../atoms/typography';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: '696px',
            height: '424px',
            borderRadius: '8px',
            opacity: 1,
            position: 'relative',
          },
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            width: '461px',
            height: '28px',
            left: '118px', 
            top: '315px',    
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text variant="body1">
            Pre-Adverse Action notice successfully sent
          </Text>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
