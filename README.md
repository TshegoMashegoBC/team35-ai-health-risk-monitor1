AI Health Risk Monitor (Team 35)

A full-stack ASP.NET Core + React app for managing health diagnostics in real time.

This app should allow authenticated users to:
- View/edit profiles and settings
- View notifications and alerts
- Manage health diagnostic tests (CRUD)

Tech Stack

Frontend: React.js (JavaScript)
Backend: ASP.NET Core (C#)
Database: SQL Server (via Entity Framework Core)
Authentication: JWT
Dev Tools: Git, Docker (optional), Visual Studio 2022, Postman


How to Run the Project

Prerequisites
- .NET 7 SDK or later
- Node.js + npm (for frontend, if applicable)
- SQL Server or LocalDB
- Visual Studio 2022 / VS Code

Backend Setup (ASP.NET Core)
1. Open `team35-ai-health-risk-monitor1.sln` in Visual Studio.
2. Restore packages:
   ```
   dotnet restore
   ```
3. Apply migrations (if using EF Core):
   ```
   dotnet ef database update
   ```
4. Run the project:
   ```
   dotnet run
   ```

It should expose the API at:
```
https://localhost:5001
```



Health Check

Visit:
AI-Health database.sql
to confirm the database connection is active.


Authentication

- Uses JWT-based login.
- All API routes (except login/register) are protected.
- Token must be sent via `Authorization: Bearer <token>`.


Tests

HealthRiskMonitor Test Suite

Overview

This project contains automated unit and integration tests for HealthRiskMonitor application.

 Structure

- AuthTests.cs: Authentication related tests.
- ProfileTests.cs: User profile related tests.
- TestHelpers/: Contains test helpers and mocks.

 Writing Tests

- Use NUnit framework.
- Test classes should be public and decorated with [TestFixture].
- Test methods must be public and decorated with [Test].
- Use clear and descriptive test method names.

 Running Tests

Use the following commands:

```bash
dotnet restore
dotnet build
dotnet test
```

You should see console output or coverage reports.

User Profile & Preferences

- Users can view and edit:
  - Name
  - Email
  - Password
  - Settings like `EmailNotification` and `AlertThreshold`

Alerts Dashboard

- Fetches alerts from the database
- Each alert shows: title, timestamp, status

Diagnostic Tests (CRUD)

- Full-stack UI + API for managing:
  - ID
  - Name
  - Result
  - Date


Deployment

Deployment in progress. We plan to deploy via Git



Team Members:
Busisiwe Radebe; 
Tshegofatso Mashego; 
Kagiso Sebati; 
Nolwazi Nhlabathi; 
Tinyiko Mnisi
 
