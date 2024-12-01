// pages/Dashboard.jsx
import ChecklistCard from "../component/CheckListCard";


function Dashboard() {
  
  return (
    <main className="flex justify-center flex-col tablet:flex-row tablet:flex-wrap md:flex-row md:flex-wrap gap-4 p-5 ">
      <ChecklistCard />
      <ChecklistCard />
      <ChecklistCard />
      <ChecklistCard />
      <ChecklistCard />
      <ChecklistCard />
      
    </main>
  );
}

export default Dashboard;
