
import React, { useEffect, useState } from "react";
import axios from "axios";

function DiagnosticTestPage() {
  const [tests, setTests] = useState([]);
  const [form, setForm] = useState({ name: "", result: "", date: "" });
  const [editingId, setEditingId] = useState(null);
  const token = localStorage.getItem("token");

  const fetchTests = () => {
    axios
      .get("http://localhost:5000/api/diagnostic-tests", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTests(res.data))
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = editingId
      ? `http://localhost:5000/api/diagnostic-tests/${editingId}`
      : "http://localhost:5000/api/diagnostic-tests";
    const method = editingId ? "put" : "post";

    axios[method](url, form, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        fetchTests();
        setForm({ name: "", result: "", date: "" });
        setEditingId(null);
      })
      .catch((err) => console.error("Submit error:", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/diagnostic-tests/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(fetchTests)
      .catch((err) => console.error("Delete error:", err));
  };

  const handleEdit = (test) => {
    setForm({
      name: test.name,
      result: test.result,
      date: test.date.split("T")[0],
    });
    setEditingId(test.id);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Diagnostic Tests</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-6">
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Test Name"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="result"
          value={form.result}
          placeholder="Result"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? "Update Test" : "Add Test"}
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Result</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr key={test.id}>
                <td className="py-2 px-4 border-b">{test.name}</td>
                <td className="py-2 px-4 border-b">{test.result}</td>
                <td className="py-2 px-4 border-b">{new Date(test.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b space-x-2">
                  <button
                    onClick={() => handleEdit(test)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(test.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DiagnosticTestPage;
