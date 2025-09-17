import React from "react";
import Header from "../../../components/Header";
import Link from "next/link";

const InstructorDashboard: React.FC = () => {
  const pageTitle = "Dashboard";

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <p>
          FOR ALL PAGES: Remember to provide buttons to return to the previous page, or to dashboard
          if needed, in just about every page.
        </p>
        <div className="menu-panel">
          <h3>Course Management</h3>
          <div style={{ marginTop: "20px" }}>
            <Link href="./create_course">Create Course</Link>
            <Link href="./manage_courses">Manage Courses</Link>
            <Link href="./manage_enrollment">Manage Enrollment</Link>
          </div>
        </div>

        <div className="menu-panel">
          <h3>User Management</h3>
          <div style={{ marginTop: "20px" }}>
            <Link href="./manage_users">Manage Users</Link>
          </div>
        </div>

        <div className="menu-panel">
          <h3>Exam Management</h3>
          <div style={{ marginTop: "20px" }}>
            <Link href="./create_exam">Create Exam</Link>
            <Link href="./exam_submissions">View Submissions</Link>
          </div>
        </div>

        <Link href="./course">Course</Link>
        <p>To add: My Courses horizontal slider, yellow buttons for Manage courses/users. </p>
      </div>
    </div>
  );
};

export default InstructorDashboard;