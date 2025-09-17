import React from "react";
import Header from "../../../components/Header";
import DashboardCourseList from "../../../components/DashboardCourseList";
import Link from "next/link";

const StudentDashboard: React.FC = () => {
  const pageTitle = "Dashboard";

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <DashboardCourseList />
        <p>
          To Add: Courselist slider currently showing exams? Should be just slider for courses. Each
          card directs to a course page. Also fix course slider width to fit inside screen width.
        </p>
        <Link href="./course">Course</Link>
      </div>
    </div>
  );
};

export default StudentDashboard;