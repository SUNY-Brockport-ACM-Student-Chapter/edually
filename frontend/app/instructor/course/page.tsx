import React from "react";
import Header from "../../../components/Header";
import Link from "next/link";

const InstructorCourse: React.FC = () => {
  const pageTitle = "Course Management";

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <div className="menu-panel">
          <h3>Course Actions</h3>
          <div style={{ marginTop: "20px" }}>
            <Link href="./create_course">Create New Course</Link>
            <Link href="./manage_courses">Manage Existing Courses</Link>
            <Link href="./modify_course">Modify Course</Link>
          </div>
        </div>

        <div className="menu-panel">
          <h3>Enrollment Management</h3>
          <div style={{ marginTop: "20px" }}>
            <Link href="./manage_enrollment">Manage Student Enrollment</Link>
          </div>
        </div>

        <Link href="./dashboard">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default InstructorCourse;