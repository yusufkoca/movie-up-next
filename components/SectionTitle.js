import Typography from "@material-ui/core/Typography";

export default function SectionTitle({ title = "" }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <Typography variant="h4">{title}</Typography>
    </div>
  );
}
