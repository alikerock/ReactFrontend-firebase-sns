import { Stack, TextField, Typography } from "@mui/material";

export default function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  ...props
}) {
  return (
    <Stack spacing={0.75}>
      {label && (
        <Typography variant="caption" fontWeight={500} color="text.secondary">
          {label}
        </Typography>
      )}

      <TextField
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        size="small"
        autoComplete={autoComplete}
        {...props}
      />
    </Stack>
  );
}
