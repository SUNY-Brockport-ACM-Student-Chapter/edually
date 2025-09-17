"use client";
import React, { useState } from "react";
import Header from "../../../../components/Header";
import ExamExit from "../../../../components/ExamExit";
import ExamQuestion from "../../../../components/ExamQuestion";
import QuestionList from "../../../../components/QuestionList";
import PrevNext from "../../../../components/PrevNext";
import Link from "next/link";

const ExamAttempt: React.FC = () => {
  const pageTitle = "Exam - Attempt";
  const [showExitModal, setShowExitModal] = useState(false);

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <Link href="../course">Back to Course</Link>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <QuestionList />
          <div style={{ flex: 1 }}>
            <ExamQuestion />
            <PrevNext />
          </div>
        </div>

        {showExitModal && <ExamExit />}

        <p>
          To Add: fix layout, bring the different views into a folder inside student/exam/attempt
          called components or views or something. Popup if attempting to exit the exam, cancel just
          closes it and continue takes you to where you clicked.
        </p>
      </div>
    </div>
  );
};

export default ExamAttempt;