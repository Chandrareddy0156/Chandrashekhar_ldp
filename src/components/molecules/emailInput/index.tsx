// src/components/molecules/EmailPasswordForm/EmailPasswordForm.tsx
import React, { useState } from "react";
import { Box,  Link ,Button} from "@mui/material";
import { Input } from "../../atoms/input";

import { PasswordInput } from "../passwordinput";

export interface EmailPasswordFormProps {
  onSubmit: (data: {
    email: string;
    password: string;
  }) => void;
}

export const EmailPasswordForm: React.FC<EmailPasswordFormProps> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
     

      {/* Email */}
      <Box sx={{ mb: 2.5 }}>
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
      </Box>

      <Box sx={{ mb: 2 }}>
  <PasswordInput
    label="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</Box>


      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          height: "48px",
          fontSize: "14px",
          font:'Cera Pro',
          color:'#03314B',
          background:'#2CE080',
          fontWeight: 600,
          textTransform:'none',
        }}
      >
        Log in with email
      </Button>


      
      <Box sx={{ mb: 3, textAlign: "right" }}>
        <Link
          href="#"
          sx={{
            fontSize: "14px",
            color: "#3A86FF",
            textDecoration: "none",
            fontWeight: 500,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            spacing:10,
           mt:3,
          }}
        >
          Forgot your password?
        </Link>
      </Box>
    </Box>
  );
};
