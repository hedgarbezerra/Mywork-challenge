# mywork-challenge
 Mywork-challenge
A proposed challenge to develop a system to store spacial data and keep track of employees
locations using Rails<br>
Database: MySQL<br>
More info on the database settings on the file **database.yml**<br>
Providede with some seeds so you don't wast time

# Getting Started

1. **Entering the project folder**<br>
    ```cd project_location/project```
2. **Installing dependencies**<br>
   ``` bundle install```
3. **Insert your Google Maps API key**<br>
   ``` set EDITOR=@YOUREDITOR --wait && rails credentials:edit```
4. **Set MySQL database up**<br>
    ```rails db:create```
5. **Import the tables to the database**<br>
    ```rails db:migrate ```  
6. **Seed the database**<br>
  ```rails db:seed```
7. **Run the project**<br>
    ```rails s ```

# RSpec Tests

1.  **Inside the project folder**<br>
    ``` rspec```

2. **Runing the test and getting the results** <br>
    ```rspec spec/features/first_test_spec.rb --format documentation```
