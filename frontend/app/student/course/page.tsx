import React from "react";
import Header from "../../../components/Header";
import StudentCourseNavBar from "../../../components/StudentCourseNavBar";
import StudentCourseHome from "../../../components/StudentCourseHome";
import StudentCourseExams from "../../../components/StudentCourseExams";

const StudentCourse: React.FC = () => {
  const pageTitle = "Course";

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <StudentCourseNavBar />
        <StudentCourseHome />
        <StudentCourseExams />
      </div>
    </div>
  );
};

export default StudentCourse;