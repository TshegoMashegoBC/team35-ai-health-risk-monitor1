
import React, { useEffect, useState } from "react";
import axios from "axios";

function AlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/alerts", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAlerts(res.data))
      .catch((err) => console.error("Error fetching alerts:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Alerts Dashboard</h2>

      {alerts.length === 0 ? (
        <p className="text-gray-600">No alerts available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Timestamp</th>
                <th className="py-2 px-4 border-b text-left">Title</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id}>
                  <td className="py-2 px-4 border-b">{new Date(alert.timestamp).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{alert.title}</td>
                  <td className="py-2 px-4 border-b">{alert.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AlertsPage;
