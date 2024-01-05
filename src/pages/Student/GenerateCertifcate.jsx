import StudentCertificate from "../../components/pages/Student/StudentCertificate";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";


export default function GenerateCertificate() {
  return (
    <>
    <StudentDashboardDetail text={"Certificate"}/>
    <StudentCertificate studentName={"Ghulam Murtaza"} />
    </>
  );
}
