import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4">
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
        {/* ใส่ checkbox เพื่อควบคุมการเปิด-ปิด */}
        <input type="checkbox" />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
    </div>
  );
}

export default App;
