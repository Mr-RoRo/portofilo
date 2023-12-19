import { Typography, Divider } from "@mui/material";
interface Props {
  title: string;
}
const TitleShape = ({ title }: Props) => {
  return (
    <Typography display="flex" gap="15px" variant="h2" mb="25px">
      {title}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          width: "60px",
          height: "2px",
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: "8px",
          my: "auto",
        }}
      />
    </Typography>
  );
};

export default TitleShape;
