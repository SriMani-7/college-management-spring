# College Management System

## Overview

A web-based application called the **College Management System** was created with Java and the Spring Boot framework. It offers a minimal solution for handling facets of a college, such as academic administration, faculty management, course registration, and student information.

## Features

Key features of the system include the following:
<details>
<summary>Admin Module</summary>

- Course management includes adding, editing, and removing courses.
- Assign students, instructors, and subjects to a course.
- Establish and revise course fees.
</details>
<details>
<summary>Faculty Module</summary>

- See the subjects and courses that have been allocated.
- Revise personal profile details.
</details>
<details>
<summary>Student Module</summary>

- Access profile.
- Access academic records and fee details.
</details>

## Technologies Used

The following technologies are used by the College Management System:

- 🖥️ **Java:** The core programming language used for backend development.
- 🌱 **Spring Boot:** A Java framework that simplifies application development with built-in modules and configuration management.
- 🎨 **HTML, CSS, JavaScript:** Used for building an interactive and user-friendly front-end interface.
- 🗄️ **MySQL:** The chosen relational database management system for storing and managing data.
- 📊 **Spring Data JPA:** Provides an Object-Relational Mapping (ORM) framework for efficient database access.
- 🎭 **Bootstrap:** A CSS framework used for designing responsive and visually appealing web pages.

## Execution and Login Information

### Admin Access

- **Username:** `admin`
- **Password:** `234567890`

Upon login, the admin can:

- Add new courses to the college curriculum.
- Manage courses by adding subjects, assigning faculty, and enrolling students.
- Define and modify course fees.

### Faculty & Student Access

- First-time users must reset their password by clicking on the **Forgot Password** button on the homepage.
- After resetting the password, users can log in and access their profile.
- Faculty members can view and manage assigned courses.

## Project Setup

### Prerequisites

Before setting up the project, ensure you have the following installed:

- ☕ **Java Development Kit (JDK) 17 or later**
- ⚙️ **Gradle Build System**
- 🗃️ **MySQL Database**
- 🏗️ **IntelliJ IDEA (Recommended) or any other preferred IDE**

### Installation Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/SriMani-7/college-management-spring.git
   ```

2. **Open the Project in an IDE**

3. **Build the Project**\
   Run the following command in the terminal:

   ```sh
   ./gradlew build
   ```

   This will download dependencies and compile the project.

4. **Run the Project**\
   Start the application using:

   ```sh
   ./gradlew bootRun
   ```

5. **Access the Application**\
   Open a web browser and navigate to:

   ```
   http://localhost:8888
   ```

## Database Setup

For detailed instructions on setting up the database for this project, refer to the [Database Setup Guide](database-setup.md).

---