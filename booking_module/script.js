import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 225,
  duration: "1m"
};

export default function() {
  let res = http.get(`http://localhost:3003/bookings/${Math.floor(Math.random() * 1000000)}/reserve`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
  sleep(0.15)
};