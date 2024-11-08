## Database setup **_(MYSQL)_**

MySQL is a popular open-source relational database management system (RDBMS) that provides a robust and scalable
platform for storing, managing, and retrieving data.

1. First Complete MySQL setup in your local run machine.
2. Remember password.
3. Open terminal / Command prompt
4. Check wether mysql added to path.
   ```shell
   echo %PATH%
   ```
5. Add mysql to path
6. Connect to MySQL as the root user:
   ```bash
   mysql -u root -p
   ```
7. Create a new database called **cms**:
   ```shell
   mysql> create database cms;
   ```
8. Create a new user named like **sa** with the password like **password**:
   ```shell
   mysql> create user 'springuser'@'%' identified by 'ThePassword';
   ```
9. Grant all privileges on the database to the user:
   ```shell
   mysql> grant all on cms.* to 'sa'@'%';
   ```

## Database setup (H2)

Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. Supports
embedded and server modes as well as a browser based console application.

Add following dependency to the build.gradle

```groovy
dependencies {

    // Other dependencies
    runtimeOnly 'com.h2database:h2'
}
```

Add following properties to application.properties file

```properties
spring.datasource.url=jdbc:h2:./database/cmsDb
spring.datasource.driverClassName=org.h2.Driver
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

## Loading Initial data

To load initial data into the database, set `spring.sql.init.mode=always` in the application.properties file. Place the
initial data SQL script in src/main/resources with a .sql extension. After data initialization, change
`spring.sql.init.mode` to `never` to prevent the script from running on subsequent application starts.