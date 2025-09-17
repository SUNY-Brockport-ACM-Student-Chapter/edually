import React from "react";
import Header from "../components/Header";
import DashboardCourseCard from "../components/DashboardCourseCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header pageTitle="EduAlly Dashboard" />
      <div className="main-workspace">
        <h2>Welcome to EduAlly</h2>
        <p>Your educational platform for managing courses and exams.</p>

        <div className="menu-panel">
          <h3>Quick Access</h3>
          <div style={{ marginTop: "20px" }}>
            <Link href="/student/dashboard">Student Dashboard</Link>
            <Link href="/instructor/dashboard">Instructor Dashboard</Link>
          </div>
        </div>

        <section className="courses-section">
          <h3>Recent Courses</h3>
          <div className="course-grid">
            <DashboardCourseCard />
            <DashboardCourseCard />
            <DashboardCourseCard />
            <DashboardCourseCard />
          </div>
        </section>

        <section className="courses-section">
          <h3>Upcoming Exams</h3>
          <div className="course-grid">
            <DashboardCourseCard />
            <DashboardCourseCard />
          </div>
        </section>
      </div>
    </div>
  );
}
