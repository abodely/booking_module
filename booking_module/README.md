# Booking_module

Abode.ly 's booking component provides a user-friendly experience to browsing the availability of an accommodation, including:
  - Overall Price
  - Itemized Price Breakout
  - Guest handling (number and type)
  
##Installation

  To install the latest version:
  ```sh
  git clone https://github.com/abode-ly/booking_module
  ```

##Getting started
  
  After navigating to the booking module folder, run the following commands:
  ```sh
  npm install
  npm run seed
  npm run build
  npm start
  ```
  
  Then, browse to localhost at port 3003 with a path of '/bookings/num', where num is the accommodation id you want to review. Note: the maximum accommodation id that will be served is 100.

  ```sh
  localhost:30003/bookings/1
  ```

##Bugs & Feedback:
  - If you notice any bugs or have suggestions, please feel free to make a pull request with the changes. Thank you!
