# booking_module

CRUD API

| Endpoint                                      | Type   | Operation                                                         |
|-----------------------------------------------|--------|-------------------------------------------------------------------|
| `/booking/:homeid`                            | GET    | Get the infotmation associated to the particular listing          |
| `/booking/:homeid`                            | POST   | Add booking information to particular listing                     |
| `/booking/:homeid`                            | UPDATE | Update the booking information of this particular listing         |
| `/booking/:homeid`                            | DELETE | Delete the booking information of this particular listing         |
| `/booking/:homeid/reserve/:startDate&:endDate`| GET    | Get the avalibility dates associated to the particular listing    |
| `/booking/:homeid/reserve/:startDate&:endDate`| POST   | Change the avalibility dates associated  of the particular listing|
| `/booking/:homeid/reserve/:startDate&:endDate`| UPDATE | Change the avalibility dates associated  of the particular listing|
| `/booking/:homeid/reserve/:startDate&:endDate`| DELETE | Change the avalibility dates associated  of the particular listing|