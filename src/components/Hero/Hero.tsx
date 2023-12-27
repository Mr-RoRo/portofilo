import {
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import profile from "../../assets/profile.png";
const Hero = () => {
  const theme = useTheme();
  const TabletAndMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      width="100%"
      id="Home"
      mt={TabletAndMobile ? "100px" : "200px"}
      mb={TabletAndMobile ? "100px" : "150px"}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: TabletAndMobile ? "40px" : "80px",
          flexDirection: TabletAndMobile ? "column-reverse" : "row",
          textAlign: TabletAndMobile ? "center" : "right",
        }}
      >
        <Stack>
          <Typography variant="h1" color="primary">
            من دانیال عباس زاده هستم
          </Typography>
          <Typography variant="h2" mt="12px" mb="15px">
            یک توسعه دهنده وب
          </Typography>
          <Typography color="secondary" lineHeight={1.6} variant="body1">
            سلام من یک توسعه دهنده فرانت اند خودآموز هستم که در قم، ایران زندگی
            میکنم. من میتونم وب سایت های واکنش گرا را از ابتدا توسعه دهم و آنها
            را به تجربه های وب کاربر پسند مدرن تبدیل کنم.
          </Typography>
          <Typography color="secondary" lineHeight={1.6} variant="body1">
            من 2 سال هست که در رشته کامپیوتر در حال تحصیل هستم و تقریبا 8 ماه
            هست که به طراحی وب مشغول بودم و از خلق وب سایت های مخنلف لذت میبرم و
            یکی از راه های خارج شدنم از سختی زندگیه
          </Typography>
        </Stack>
        <Stack
          component="img"
          src={profile}
          borderRadius="100%"
          width="250px"
          height="250px"
        />
      </Container>
    </Stack>
  );
};

export default Hero;
