import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnW14vx1byNMztZjY4rSxkZdEPyLzzTxXKEraw7FpskHAau208jCL6w-NUTEi7yNw8aw&usqp=CAU";

  const HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7AWpveUs606cda15Zc5jt4NhWHJvJMLukA&s";
  const COLD_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3fhVrPA6Sar88tO-3RscCaStrFEm_A5fFg&s";
  const RAIN_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9frw0rcUSsm5xoDgG4zTFtRQdYl1zBxXwzokRNnjQUOmquQMRlU1A0m_pxfuoAHbD30&usqp=CAU";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
