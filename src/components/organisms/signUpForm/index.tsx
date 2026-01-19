import React, { useState } from "react";
import { Box, Typography, Button, Link, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Input from "../../atoms/input";
import PasswordField from "../passwordField"; 
import { AgreementCheckbox } from "../../molecules/agreementCheckbox";

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [agreed, setAgreed] = useState(false);


  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

//button enabled
  const isFormValid = 
    email && !emailError && 
    password && !passwordError && 
    confirmPassword && !confirmPasswordError && 
    agreed;

  // ---------- Handlers ----------
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value && !isValidEmail(value) ? "Enter a valid email address" : "");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value && value.length < 6 ? "Password must be at least 6 characters" : "");
    setConfirmPasswordError(confirmPassword && value !== confirmPassword ? "Passwords do not match" : "");
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(value && value !== password ? "Passwords do not match" : "");
  };

  const handleSignUp = () => {
    if (!isFormValid) return;
    navigate("/candidate/1");
  };

  return (
    <Box sx={{ p: 5, bgcolor: "background.paper", borderRadius: 3, boxShadow: 3, maxWidth: 400, width: "100%" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>Sign up</Typography>
      <Typography variant="body2" color="text.secondary" mb={4}>
        Please sign up to start exploring the platform
      </Typography>

      <Stack spacing={2.5}>
        {/* Email */}
        <Stack spacing={0.5}>
          <Typography variant="caption" fontWeight={600} color="text.secondary">Email</Typography>
          <Input
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleEmailChange}
            autoComplete="new-email"
          />
          {emailError && <Typography variant="caption" color="error">{emailError}</Typography>}
        </Stack>

        <Stack spacing={0.5}>
          <PasswordField
            label="Password"
            placeholder="*******"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
          {passwordError && <Typography variant="caption" color="error">{passwordError}</Typography>}
        </Stack>

       
        <Stack spacing={0.5}>
          <PasswordField
            label="Confirm Password"
            placeholder="*******"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            autoComplete="new-password"
          />
          {confirmPasswordError && <Typography variant="caption" color="error">{confirmPasswordError}</Typography>}
        </Stack>
      </Stack>

      <AgreementCheckbox checked={agreed} onChange={setAgreed} />

      <Button
        fullWidth
        variant="contained"
        onClick={handleSignUp}
        disabled={!isFormValid} 
        sx={{ 
            mt: 3, 
            py: 1.5,
            "&.Mui-disabled": { bgcolor: "#95AAFF" } 
        }}
      >
        Sign up
      </Button>

      <Typography variant="body2" align="center" mt={3} color="text.secondary">
        Already a member?{" "}
        <Link href="#" sx={{ fontWeight: 700, textDecoration: "none" }}>Sign in</Link>
      </Typography>
    </Box>
  );
};