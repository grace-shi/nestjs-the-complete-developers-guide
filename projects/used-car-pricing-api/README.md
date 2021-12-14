# Used Car Pricing API

### Service Flow
<div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
<div>
  Users sign up with email/password
</div>
<div>
              ⬇
</div>   
<div style="text-align: center;">        
Users get an estimate for how much their car is worth based on the make/modle/year/mileage
</div>
<div>
              ⬇
</div> 
Users can report what they sold their vechiles for
<div>
              ⬇
</div> 
Admins have to approve reported sales

</div>
### API Design

| Method and Route | Body or Query String | Description |
|--|--|--|
| POST /auth/signup | Body - { email, password } | Create a new user and sign in |
| POST /auth/signin | Body - { email, password } | Sign in as an existing user |
| GET /reports | Query String - make, model, year, mileage, longitude, latitude | Get an estimate for the cars value |
| POST /reports | Body - { make, model, year, mileage, longitude, latitude, price } | Report how much a vehicle sold for |
| PATCH /reports| Body - { approved }| Approve or reject a report submitted by a user |

### Module Design

|API route|Module|Controllers| Services| Repositories|
|-|-|-|-|-|
|auth|Users|Users Controller|Users Service|Users Repository|
|reports|Reports|Reports Controller|Reports Service|Reports Repository|

### TypeORM
Connection to SQLite DB -> AppModule

AppModule -> UsersModule    -> User Entity - Lists the differnt properties that a User has(no functionality)
                            -> Users Repository - Methods to find, update, delete, create a User 
          -> ReportsModule  -> Report Entity - Lists the different properties that a Report has(no functionality)
                            -> Reports Respository - Methods to find, update, delete, create a Report

