import React from "react";
import Header from "../../../components/Header";
import Link from "next/link";

const CreateCourse: React.FC = () => {
  const pageTitle = "Create Course";

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <div className="menu-panel">
          <h3>Course Information</h3>
          <p>To Add: form for course creation (see figma)</p>
          <form style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "15px" }}>
              <label>Course Name:</label>
              <input type="text" style={{ marginLeft: "10px", padding: "5px", width: "300px" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Course Code:</label>
              <input type="text" style={{ marginLeft: "10px", padding: "5px", width: "300px" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Description:</label>
              <textarea style={{ marginLeft: "10px", padding: "5px", width: "300px", height: "100px" }} />
            </div>
            <button type="submit" style={{ padding: "10px 20px", backgroundColor: "var(--bport-green)", color: "white", border: "none", borderRadius: "5px" }}>
              Create Course
            </button>
          </form>
        </div>

        <Link href="./dashboard">Back to Dashboard</Link>
        <Link href="./course">Back to Course Management</Link>
      </div>
    </div>
  );
};

export default CreateCourse;