--Table creation
--Diagnostic test table:
CREATE TABLE DiagnosticTest (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    result VARCHAR(50) NOT NULL,
    date TIMESTAMP NOT NULL
);

-- Users table:
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    notify_threshold INTEGER DEFAULT 5,
    alert_frequency VARCHAR(20) DEFAULT 'daily'
);

-- Alerts table:
CREATE TABLE Alerts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    status VARCHAR(50),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


--Sample data for users:
INSERT INTO Users (name, email, password_hash, notify_threshold, alert_frequency)
VALUES
('Thabo Mokoena', 'thabo@example.com', 'hashed_pw_1', 3, 'daily'),
('Aisha Patel', 'aisha@example.com', 'hashed_pw_2', 5, 'weekly'),
('Lebo Khumalo', 'user1@example.com', 'hashed_pw_3', 1, 'daily'),
('Karabo Pillay', 'user2@example.com', 'hashed_pw_4', 5, 'weekly'),
('Themba Mokoena', 'user3@example.com', 'hashed_pw_5', 5, 'daily'),
('Themba Baloyi', 'user4@example.com', 'hashed_pw_6', 3, 'daily'),
('Lebo Nkosi', 'user5@example.com', 'hashed_pw_7', 1, 'weekly'),
('Karabo Baloyi', 'user6@example.com', 'hashed_pw_8', 4, 'daily'),
('Kabelo Pillay', 'user7@example.com', 'hashed_pw_9', 5, 'daily'),
('Naledi Nkosi', 'user8@example.com', 'hashed_pw_10', 5, 'weekly'),
('Lungi Nkosi', 'user9@example.com', 'hashed_pw_11', 1, 'weekly'),
('Zinhle Van Wyk', 'user10@example.com', 'hashed_pw_12', 4, 'daily');


--Sample data for alerts:
INSERT INTO Alerts (title, status, timestamp)
VALUES
('High Blood Pressure', 'Critical', '2025-07-29 09:30:00'),
('Glucose Level Normal', 'Info', '2025-07-29 08:00:00'),
('Missed Check-In', 'Warning', '2025-07-28 20:15:00'),
('Elevated Heart Rate', 'Critical', '2025-07-27 05:00:00'),
('Low Oxygen Levels', 'Critical', '2025-07-28 01:00:00'),
('Abnormal ECG', 'Warning', '2025-07-28 06:00:00'),
('Seizure Warning', 'Critical', '2025-07-27 09:00:00'),
('Vitals Stable', 'Critical', '2025-07-28 20:00:00'),
('Dehydration Risk', 'Warning', '2025-07-28 00:00:00'),
('Fall Detected', 'Warning', '2025-07-28 10:00:00'),
('Fatigue Reported', 'Warning', '2025-07-28 19:00:00'),
('Infection Signs', 'Critical', '2025-07-27 23:00:00'),
('Normal Check-In', 'Warning', '2025-07-28 20:00:00');


--Sample data for diagnostic tests:
INSERT INTO DiagnosticTest (name, result, date)
VALUES
('Blood Pressure Test', 'Normal', '2025-07-28 10:15:00'),
('Glucose Test', 'High', '2025-07-29 09:00:00'),
('Cholesterol Test', 'Normal', '2025-07-27 14:45:00'),
('COVID Test', 'Inconclusive', '2025-07-28 00:00:00'),
('MRI Scan', 'Normal', '2025-07-28 00:00:00'),
('X-Ray', 'Normal', '2025-07-22 00:00:00'),
('Blood Sugar', 'Low', '2025-07-25 00:00:00'),
('Urine Analysis', 'Inconclusive', '2025-07-19 00:00:00'),
('ECG', 'Normal', '2025-07-21 00:00:00'),
('CT Scan', 'Normal', '2025-07-23 00:00:00'),
('Allergy Test', 'Normal', '2025-07-21 00:00:00'),
('Liver Function', 'Inconclusive', '2025-07-25 00:00:00'),
('Kidney Function', 'High', '2025-07-26 00:00:00');
