import { Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        {title}
      </Typography>

      <Typography
        color="text.secondary"
        mb={5}
      >
        {subtitle}
      </Typography>
    </>
  );
}