import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration } = useContext(AppContext);
  return (
    <>
      <div className="md:px-32 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 pt-3 pb-2 font-semibold truncate">Course</th>
              <th className="px-4 pt-3 font-semibold truncate">Duration</th>
              <th className="px-4 pt-3 font-semibold truncate">Completed</th>
              <th className="px-4 pt-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            {enrolledCourses.map((course, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24 md:w-28"
                  />
                  <div>
                    <p>{course.courseTitle}</p>
                  </div>
                </td>
                <td>{calculateCourseDuration(course)}</td>
                <td>
                  4/10 <span>Lectures</span>
                </td>
                <td>
                  <button>On Going</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyEnrollments;
